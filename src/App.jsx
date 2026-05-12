import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import PdfViewer from './components/PdfViewer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
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
