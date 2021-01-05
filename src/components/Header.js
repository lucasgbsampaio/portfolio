import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoDocument } from 'react-icons/io5';

import avatar from '../assets/images/avatar.jpg';

import style from './styles/Header.module.css';

export default function Header() {
  return (
    <section id={style.header}>
      <header>
        <div className={style.image}>
          <img src={avatar} alt="avatar" />
        </div>

        <h1>Lucas Sampaio</h1>

        <p>
          Full Stack Web Developer
          <br />a
        </p>
      </header>

      <nav className={style.nav}>
        <ul className={style.options}>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skills">Tecnologias e Ferramentas</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </nav>

      <footer>
        <ul className={style.icons}>
          <li>
            <a
              href="https://github.com/lucasfe4nor"
              className={style.github}
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lucasgbsampaio"
              rel="noreferrer"
              target="_blank"
              className={style.linkedin}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/lucasfe4nor"
              rel="noreferrer"
              target="_blank"
              className={style.twitter}
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a className={style.document} href={{}}>
              <IoDocument />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
