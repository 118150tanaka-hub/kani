import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// PDF.js workerを設定
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const canvasRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument('./portfolio.pdf').promise;
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        renderPage(pdf, 1);
      } catch (error) {
        console.error('PDFの読み込みエラー:', error);
      }
    };
    loadPdf();
  }, []);

  const renderPage = async (pdf, pageNum) => {
    if (!pdf) return;
    const page = await pdf.getPage(pageNum);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: 1.5 });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: ctx,
      viewport: viewport
    }).promise;
  };

  const nextPage = () => {
    if (currentPage < numPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      renderPage(pdfDoc, newPage);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      renderPage(pdfDoc, newPage);
    }
  };

  return (
    <div className="container">
      <section className="section toc-section">
        <h4>📑 Portfolio PDF 目次</h4>
        <ul className="toc-list">
          <li><strong>P1-3</strong>: イラスト作品集 - キャラクター表現</li>
          <li><strong>P4-7</strong>: ポートレート・背景イラスト</li>
          <li><strong>P8-11</strong>: CG モデリング - キャラクター</li>
          <li><strong>P12-15</strong>: 環境・メカニカル・テクスチャリング</li>
          <li><strong>P16-18</strong>: キャラクターデザイン - オリジナル</li>
          <li><strong>P19-20</strong>: バリエーション・制作プロセス</li>
        </ul>
      </section>

      <section className="section">
        <h3>Portfolio PDF</h3>
        <div className="pdf-viewer">
          <div className="pdf-canvas-wrapper">
            <canvas ref={canvasRef}></canvas>
            {!pdfDoc && <p style={{ color: '#999' }}>PDFファイルがまだアップロードされていません。portfolio.pdf をプロジェクトルートに配置してください。</p>}
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
    </div>
  );
};

export default PdfViewer;