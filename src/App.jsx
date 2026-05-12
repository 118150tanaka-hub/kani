import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import PdfViewer from './components/PdfViewer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress.toString());
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="app">
      <div className="background-animations">
        <div className="balloon balloon-1"></div>
        <div className="balloon balloon-2"></div>
        <div className="balloon balloon-3"></div>
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
      </div>
      <Header />
      <About />
      <Projects />
      <PdfViewer />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
