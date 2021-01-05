import React from 'react';

import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import 'normalize.css';
import './App.css';

export default function App() {
  return (
    <div id="wrapper">
      <header id="header">
        <h1>Lucas Sampaio</h1>
        <p>Full Stack Web Developer</p>
      </header>

      <nav id="nav">
        <ul>
          <li>
            <a href="#about" className="active">
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>

      <div id="main">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
