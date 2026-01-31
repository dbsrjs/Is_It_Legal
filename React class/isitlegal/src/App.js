import React, { useState } from 'react';
import './App.css';
import SearchResults from './components/SearchResults';
import LawDetails from './components/LawDetails';
import CountryComparison from './components/CountryComparison';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { searchLegalInformation } from './services/aiService';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      // Call AI service
      const response = await searchLegalInformation(searchQuery);

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
      const response = await searchLegalInformation(example);

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

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="logo">Is It Legal?</h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h2 className="hero-title">
              Find Out If It's Legal
              <br />
              <span className="hero-subtitle">in Any Country</span>
            </h2>
            <p className="hero-description">
              Comprehensive legal information for travelers, digital nomads, and curious minds
            </p>

            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="e.g., drone Japan, VPN China, cannabis Germany..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </div>
            </form>

            <div className="search-examples">
              <span>Popular searches:</span>
              <button onClick={() => handleExampleClick('drone Japan')}>drone Japan</button>
              <button onClick={() => handleExampleClick('VPN China')}>VPN China</button>
              <button onClick={() => handleExampleClick('cannabis Germany')}>cannabis Germany</button>
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

        <section className="categories">
          <div className="container">
            <h3>Browse by Category</h3>
            <div className="category-grid">
              <div className="category-card">
                <span className="category-icon">🎮</span>
                <h4>Digital</h4>
                <p>VPN, Torrenting, Web Scraping</p>
              </div>
              <div className="category-card">
                <span className="category-icon">🚁</span>
                <h4>Drone & Photography</h4>
                <p>Drone Laws, Street Photography</p>
              </div>
              <div className="category-card">
                <span className="category-icon">🎰</span>
                <h4>Gambling</h4>
                <p>Online Casino, Sports Betting</p>
              </div>
              <div className="category-card">
                <span className="category-icon">🌿</span>
                <h4>Substances</h4>
                <p>Cannabis, CBD, E-cigarettes</p>
              </div>
              <div className="category-card">
                <span className="category-icon">🔪</span>
                <h4>Possessions</h4>
                <p>Knives, Pepper Spray, Tasers</p>
              </div>
              <div className="category-card">
                <span className="category-icon">📞</span>
                <h4>Privacy</h4>
                <p>Call Recording, Location Tracking</p>
              </div>
              <div className="category-card">
                <span className="category-icon">🚗</span>
                <h4>Traffic</h4>
                <p>DUI Limits, Phone Usage</p>
              </div>
              <div className="category-card">
                <span className="category-icon">💼</span>
                <h4>Business</h4>
                <p>Cryptocurrency, Freelancing</p>
              </div>
            </div>
          </div>
        </section>

        <CountryComparison />

        <section className="how-it-works">
          <div className="container">
            <h3>How It Works</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Search</h4>
                <p>Enter an action and country</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Learn</h4>
                <p>Get instant legal status</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Verify</h4>
                <p>Check official sources</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Is It Legal?</h4>
              <p>Global legal information platform</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#contribute">Contribute</a>
            </div>
            <div className="footer-section">
              <h4>Disclaimer</h4>
              <p className="disclaimer">
                This website provides general legal information only and is not a substitute for professional legal advice.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Is It Legal? All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
