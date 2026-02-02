import React, { useState } from 'react';
import './App.css';
import SearchResults from './components/SearchResults';
import LawDetails from './components/LawDetails';
import CountryComparison from './components/CountryComparison';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import LanguageSelector from './components/LanguageSelector';
import AboutModal from './components/AboutModal';
import PrivacyModal from './components/PrivacyModal';
import CategoryModal from './components/CategoryModal';
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
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();

    if (!searchQuery.trim()) {
      setSearchResults(null);
      setShowResults(false);
      setError(null);
      return;
    }

    // Reset states
    setIsLoading(true);
    setShowResults(false);
    setError(null);
    setSearchResults(null);

    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.getElementById('search-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    try {
      // Call AI service with current language
      const response = await searchLegalInformation(searchQuery, language);

      if (response.success) {
        setSearchResults([response.data]);
        setShowResults(true);
      } else {
        setError(response.error);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = async (example) => {
    setSearchQuery(example);

    // Trigger search with the example query
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
      const response = await searchLegalInformation(example, language);

      if (response.success) {
        setSearchResults([response.data]);
        setShowResults(true);
      } else {
        setError(response.error);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    handleSearch();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsCategoryModalOpen(true);
  };

  const handleCategorySearchExample = (query) => {
    handleExampleClick(query);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="logo">{t.logo}</h1>
          <nav className="nav">
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.nav.home}</a>
            <a href="#categories" onClick={(e) => { e.preventDefault(); document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }); }}>{t.nav.categories}</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); setIsAboutModalOpen(true); }}>{t.nav.about}</a>
            <LanguageSelector />
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
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

            <div className="search-examples">
              <span>{t.hero.popularSearches}</span>
              <button onClick={() => handleExampleClick(t.hero.examples.drone)}>{t.hero.examples.drone}</button>
              <button onClick={() => handleExampleClick(t.hero.examples.vpn)}>{t.hero.examples.vpn}</button>
              <button onClick={() => handleExampleClick(t.hero.examples.cannabis)}>{t.hero.examples.cannabis}</button>
            </div>
          </div>
        </section>

        <section id="search-results">
          {isLoading && <LoadingSpinner />}

          {error && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}

          {showResults && !isLoading && !error && (
            <>
              <SearchResults results={searchResults} query={searchQuery} />
              {searchResults && searchResults.length > 0 && (
                <LawDetails laws={searchResults} />
              )}
            </>
          )}
        </section>

        <section id="categories" className="categories">
          <div className="container">
            <h3>{t.categories.title}</h3>
            <div className="category-grid">
              <div className="category-card" onClick={() => handleCategoryClick('digital')}>
                <span className="category-icon">🎮</span>
                <h4>{t.categories.digital.title}</h4>
                <p>{t.categories.digital.description}</p>
              </div>
              <div className="category-card" onClick={() => handleCategoryClick('drone')}>
                <span className="category-icon">🚁</span>
                <h4>{t.categories.drone.title}</h4>
                <p>{t.categories.drone.description}</p>
              </div>
              <div className="category-card" onClick={() => handleCategoryClick('gambling')}>
                <span className="category-icon">🎰</span>
                <h4>{t.categories.gambling.title}</h4>
                <p>{t.categories.gambling.description}</p>
              </div>
              <div className="category-card" onClick={() => handleCategoryClick('substances')}>
                <span className="category-icon">🌿</span>
                <h4>{t.categories.substances.title}</h4>
                <p>{t.categories.substances.description}</p>
              </div>
              <div className="category-card" onClick={() => handleCategoryClick('possessions')}>
                <span className="category-icon">🔪</span>
                <h4>{t.categories.possessions.title}</h4>
                <p>{t.categories.possessions.description}</p>
              </div>
              <div className="category-card" onClick={() => handleCategoryClick('privacy')}>
                <span className="category-icon">📞</span>
                <h4>{t.categories.privacy.title}</h4>
                <p>{t.categories.privacy.description}</p>
              </div>
              <div className="category-card" onClick={() => handleCategoryClick('traffic')}>
                <span className="category-icon">🚗</span>
                <h4>{t.categories.traffic.title}</h4>
                <p>{t.categories.traffic.description}</p>
              </div>
              <div className="category-card" onClick={() => handleCategoryClick('business')}>
                <span className="category-icon">💼</span>
                <h4>{t.categories.business.title}</h4>
                <p>{t.categories.business.description}</p>
              </div>
            </div>
          </div>
        </section>

        <CountryComparison />

        <section className="how-it-works">
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
      </main>

      <footer className="footer">
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
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        category={selectedCategory}
        onSearchExample={handleCategorySearchExample}
      />
    </div>
  );
}

export default App;
