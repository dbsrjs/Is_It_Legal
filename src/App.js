import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import SearchResults from './components/SearchResults';
import LawDetails from './components/LawDetails';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import LanguageSelector from './components/LanguageSelector';
import CategoryBrowse from './components/CategoryBrowse';
import RecentSearches from './components/RecentSearches';
import CountryComparison from './components/CountryComparison';
import ShareButtons from './components/ShareButtons';
import TrendingTopics from './components/TrendingTopics';
import RelatedSearches from './components/RelatedSearches';
import FAQ from './components/FAQ';
import AboutModal from './components/AboutModal';
import PrivacyModal from './components/PrivacyModal';
import { useLanguage } from './contexts/LanguageContext';
import { searchLegalInformation } from './services/aiService';

function App() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const initialSearchDone = useRef(false);
  const searchIdRef = useRef(0);
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('recentSearches')) || [];
    } catch {
      return [];
    }
  });

  const addToRecentSearches = useCallback((query) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item !== query);
      const updated = [query, ...filtered].slice(0, 10);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeRecentSearch = useCallback((query) => {
    setRecentSearches((prev) => {
      const updated = prev.filter((item) => item !== query);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearAllRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  }, []);

  const updateUrl = useCallback((query) => {
    if (query && query.trim()) {
      const url = new URL(window.location);
      url.searchParams.set('q', query.trim());
      window.history.pushState({q: query.trim()}, '', url);
    } else {
      const url = new URL(window.location);
      url.searchParams.delete('q');
      window.history.pushState({}, '', url);
    }
  }, []);

  const executeSearch = useCallback(async (query, shouldUpdateUrl = true) => {
    if (!query || !query.trim()) {
      setSearchResults(null);
      setShowResults(false);
      setError(null);
      if (shouldUpdateUrl) updateUrl('');
      if (t.meta && t.meta.title) {
        document.title = t.meta.title;
      }
      return;
    }

    const currentSearchId = ++searchIdRef.current;

    setSearchQuery(query);
    addToRecentSearches(query.trim());
    if (shouldUpdateUrl) updateUrl(query);

    setIsLoading(true);
    setShowResults(false);
    setError(null);
    setSearchResults(null);

    setTimeout(() => {
      const resultsSection = document.getElementById('search-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    try {
      const response = await searchLegalInformation(query, language);

      if (currentSearchId !== searchIdRef.current) return;

      if (response.success) {
        setSearchResults([response.data]);
        setShowResults(true);

        if (t.meta && t.meta.searchTitle) {
          const topic = response.data.topicName || query;
          const country = response.data.countryName || '';
          document.title = t.meta.searchTitle
            .replace('{topic}', topic)
            .replace('{country}', country);
        }
      } else {
        setError(response.error);
      }
    } catch (err) {
      if (currentSearchId !== searchIdRef.current) return;
      setError(err.message || 'An unexpected error occurred');
    } finally {
      if (currentSearchId === searchIdRef.current) {
        setIsLoading(false);
      }
    }
  }, [language, addToRecentSearches, updateUrl, t]);

  // URL 쿼리 파라미터에서 검색어 및 공유 결과 읽기
  useEffect(() => {
    if (initialSearchDone.current) return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    const r = params.get('r');
    if (q) {
      initialSearchDone.current = true;
      setSearchQuery(q);
      addToRecentSearches(q.trim());

      // 공유된 결과 데이터가 있으면 즉시 표시 (AI 재검색 없음)
      if (r) {
        try {
          const decoded = JSON.parse(decodeURIComponent(escape(atob(r))));
          setSearchResults([{
            id: Date.now(),
            status: decoded.s,
            topicName: decoded.t,
            countryName: decoded.c,
            summary: decoded.m,
            topic: decoded.t,
            country: decoded.c,
            category: 'other',
            updated: new Date().toISOString().split('T')[0]
          }]);
          setShowResults(true);
          return;
        } catch {}
      }

      // 공유 데이터 없으면 AI 검색 실행
      executeSearch(q, false);
    }
  }, [executeSearch, addToRecentSearches]);

  // 브라우저 뒤로가기/앞으로가기 지원
  useEffect(() => {
    const handlePopState = (event) => {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) {
        setSearchQuery(q);
        executeSearch(q, false);
      } else {
        setSearchQuery('');
        setSearchResults(null);
        setShowResults(false);
        setError(null);
        // 홈으로 돌아갈 때 기본 title 복원
        if (t.meta && t.meta.title) {
          document.title = t.meta.title;
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [executeSearch, t]);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    executeSearch(searchQuery);
  };

  const handleExampleClick = async (example) => {
    setSearchQuery(example);
    executeSearch(example);
  };

  const handleRetry = () => {
    setError(null);
    executeSearch(searchQuery);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="logo">{t.logo}</h1>
          <nav className="nav">
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.nav.home}</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); setIsAboutModalOpen(true); }}>{t.nav.about}</a>
            <LanguageSelector />
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero" aria-label="Legal search">
          <div className="container">
            <h2 className="hero-title">
              {t.hero.title}
              <br />
              <span className="hero-subtitle">{t.hero.subtitle}</span>
            </h2>
            <p className="hero-description">
              {t.hero.description}
            </p>

            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder={t.hero.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                  {t.hero.searchButton}
                </button>
              </div>
            </form>

            <RecentSearches
              searches={recentSearches}
              onSearchClick={handleExampleClick}
              onRemove={removeRecentSearch}
              onClearAll={clearAllRecentSearches}
            />
          </div>
        </section>

        <section id="search-results" aria-label="Search results">
          {isLoading && <LoadingSpinner />}

          {error && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}

          {showResults && !isLoading && !error && (
            <>
              <SearchResults results={searchResults} query={searchQuery} />
              {searchResults && searchResults.length > 0 && (
                <>
                  <LawDetails laws={searchResults} />
                  <ShareButtons
                    query={searchQuery}
                    topic={searchResults[0].topicName}
                    country={searchResults[0].countryName}
                    status={searchResults[0].status}
                    summary={searchResults[0].summary}
                  />
                  {searchResults[0].comparisons && (
                    <CountryComparison comparisons={searchResults[0].comparisons} />
                  )}
                  {searchResults[0].relatedSearches && searchResults[0].relatedSearches.length > 0 && (
                    <RelatedSearches
                      searches={searchResults[0].relatedSearches}
                      onSearchClick={handleExampleClick}
                    />
                  )}
                </>
              )}
            </>
          )}
        </section>

        <TrendingTopics onSearchClick={handleExampleClick} />

        <CategoryBrowse onCategoryClick={handleExampleClick} />

        <section className="how-it-works" aria-label="How it works">
          <div className="container">
            <h3>{t.howItWorks.title}</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>{t.howItWorks.step1.title}</h4>
                <p>{t.howItWorks.step1.description}</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>{t.howItWorks.step2.title}</h4>
                <p>{t.howItWorks.step2.description}</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>{t.howItWorks.step3.title}</h4>
                <p>{t.howItWorks.step3.description}</p>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <footer className="footer" aria-label="Site footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>{t.footer.title}</h4>
              <p>{t.footer.description}</p>
            </div>
            <div className="footer-section">
              <h4>{t.footer.quickLinks}</h4>
              <a href="#about" onClick={(e) => { e.preventDefault(); setIsAboutModalOpen(true); }}>{t.footer.about}</a>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>{t.footer.privacy}</a>
              <a href="#contribute">{t.footer.contribute}</a>
            </div>
            <div className="footer-section">
              <h4>{t.footer.disclaimerTitle}</h4>
              <p className="disclaimer">
                {t.footer.disclaimerText}
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
            <div className="footer-credits">
              <p>{t.footer.developedBy} <a href="mailto:lyg@lawornot.com"><strong>LYG</strong></a></p>
              <p>{t.footer.contact} <a href="mailto:support@lawornot.com">support@lawornot.com</a></p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </div>
  );
}

export default App;
