import React from 'react';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoDocument } from 'react-icons/io5';

import style from './styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="main special">
      <header className="major">
        <h2>Contato</h2>
        <p>E-mail: lukas-gabriel2002@hotmail.com</p>
      </header>
      <footer className={style.major}>
        <ul className={style.icons}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/lucasfe4nor"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/lucasgbsampaio"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/lucasfe4nor"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={{}}>
              <IoDocument />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
