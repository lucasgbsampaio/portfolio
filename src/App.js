import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import 'normalize.css';
import './App.css';

export default function App() {
  return (
    <>
      <Header />

      <div id="wrapper">
        <div id="main">
          <About />
          <Skills />
          <Projects />
        </div>

        <Footer />
      </div>
    </>
  );
}
