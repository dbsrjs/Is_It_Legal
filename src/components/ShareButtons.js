import React, { useState } from 'react';
import pako from 'pako';
import { useLanguage } from '../contexts/LanguageContext';
import './ShareButtons.css';

function ShareButtons({ query, topic, country, status, summary, details, penalties, sources, conditions }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const resultData = JSON.stringify({
    s: status, t: topic, c: country, m: summary,
    d: details || '', p: penalties || '', u: sources || [], n: conditions || []
  });
  const compressed = pako.deflate(new TextEncoder().encode(resultData));
  const encoded = btoa(String.fromCharCode(...compressed));
  const shareUrl = `${window.location.origin}/?q=${encodeURIComponent(query)}&r=${encodeURIComponent(encoded)}`;

  const getStatusIcon = (s) => {
    switch (s) {
      case 'legal': return '🟢';
      case 'conditional': return '🟡';
      case 'illegal': return '🔴';
      default: return '⚫';
    }
  };

  const shareText = t.share.shareText
    .replace('[topic]', topic)
    .replace('[country]', country)
    .replace('[status]', getStatusIcon(status));

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleRedditShare = () => {
    const url = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="share-section">
      <div className="container share-container">
        <span className="share-title">{t.share.title}</span>
        <div className="share-buttons">
          <button
            className={`share-btn share-btn-copy ${copied ? 'copied' : ''}`}
            onClick={handleCopyLink}
            aria-label={copied ? t.share.copied : t.share.copyLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span>{copied ? t.share.copied : t.share.copyLink}</span>
          </button>

          <button
            className="share-btn share-btn-twitter"
            onClick={handleTwitterShare}
            aria-label={t.share.twitter}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>{t.share.twitter}</span>
          </button>

          <button
            className="share-btn share-btn-facebook"
            onClick={handleFacebookShare}
            aria-label={t.share.facebook}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>{t.share.facebook}</span>
          </button>

          <button
            className="share-btn share-btn-reddit"
            onClick={handleRedditShare}
            aria-label={t.share.reddit}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
            <span>{t.share.reddit}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareButtons;
