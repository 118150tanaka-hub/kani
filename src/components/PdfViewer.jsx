import React, { useState } from 'react';
import images from '../images';

const PdfViewer = () => {
  const slides = images.portfolioSlides;
  const [currentPage, setCurrentPage] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const numPages = slides.length;
  const currentSlide = slides[currentPage - 1];

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <section className="section toc-section">
        <h4>📑 Portfolio Slide 目次</h4>
        <ul className="toc-list">
          <li><strong>P1-3</strong>: イラスト作品集 - キャラクター表現</li>
          <li><strong>P4-7</strong>: ポートレート・背景イラスト</li>
          <li><strong>P8-11</strong>: CG モデリング - キャラクター</li>
          <li><strong>P12-15</strong>: 環境・メカニカル・テクスチャリング</li>
          <li><strong>P16-18</strong>: キャラクターデザイン - オリジナル</li>
          <li><strong>P19-21</strong>: バリエーション・制作プロセス</li>
        </ul>
      </section>

      <section className="section">
        <h3>Portfolio Slideshow</h3>
        <div className="pdf-viewer">
          <div className="pdf-canvas-wrapper" onClick={() => setFullscreen(true)}>
            {currentSlide ? (
              <img className="portfolio-slide-image" src={currentSlide} alt={`Portfolio page ${currentPage}`} loading="lazy" />
            ) : (
              <div className="portfolio-missing">
                <p>ページ {currentPage} の画像がまだありません。img.portfolio フォルダに画像を追加してください。</p>
              </div>
            )}
          </div>
          <div className="pdf-controls">
            <button className="pdf-btn" onClick={previousPage} disabled={currentPage === 1}>← 前へ</button>
            <div className="pdf-page-info">
              ページ {currentPage} / {numPages}
            </div>
            <button className="pdf-btn" onClick={nextPage} disabled={currentPage === numPages}>次へ →</button>
          </div>
        </div>
      </section>

      {fullscreen && currentSlide && (
        <div className="fullscreen-slide-overlay" onClick={() => setFullscreen(false)}>
          <div className="fullscreen-slide-inner" onClick={(e) => e.stopPropagation()}>
            <button className="fullscreen-close-btn" onClick={() => setFullscreen(false)}>×</button>
            <button className="fullscreen-nav fullscreen-prev" onClick={previousPage} disabled={currentPage === 1}>←</button>
            <img className="fullscreen-slide-image" src={currentSlide} alt={`Portfolio page ${currentPage}`} />
            <button className="fullscreen-nav fullscreen-next" onClick={nextPage} disabled={currentPage === numPages}>→</button>
            <div className="fullscreen-slide-counter">ページ {currentPage} / {numPages}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;