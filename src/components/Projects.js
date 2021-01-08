import React from 'react';

import chatapp from '../assets/images/chatapp.png';
import toDoList from '../assets/images/to-do.png';
import weatherabove from '../assets/images/weatherabove.png';
import dogs from '../assets/images/dogs.png';
import cfpApp from '../assets/images/cfp-app.png';
import portfolio from '../assets/images/portfolio.png';

import style from './styles/Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="main special">
      <header className="major">
        <h2>Projetos</h2>
      </header>
      <ul className={style.features}>
        <li>
          <div className={style.image}>
            <img src={chatapp} alt="chatapp" />
          </div>
          <h3>Chat App</h3>
          <p>
            Aplicativo de salas de conversas com comunicação em tempo real
            através de websockets. Totalmente responsivo, possui uma versão
            adaptada para mobile.
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://chat-pern.herokuapp.com/"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/lucasfe4nor/chatroom-app"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
        <li>
          <div className={style.image}>
            <img src={weatherabove} alt="weatherabove" />
          </div>
          <h3>WeatherAbove</h3>
          <p>
            Aplicação de previsão do tempo que apresenta dados meteorológicos de
            uma determinada cidade.
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://appweather-above.herokuapp.com"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/lucasfe4nor/app-weather"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
        <li>
          <div className={style.image}>
            <img src={dogs} alt="dogs" />
          </div>
          <h3>Dogs</h3>
          <p>
            Rede social para cachorros no estilo do Instagram. É possível postar
            fotos, comentar e interagir com outros usuários.
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dogss-app.herokuapp.com"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/lucasfe4nor/app-dogs"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
        <div className={style.horizontalLine}></div>
        <li>
          <div className={style.image}>
            <img src={toDoList} alt="toDoList" />
          </div>
          <h3>To-Do App</h3>
          <p>
            Site de registro de tarefas para obter controle e planejamento ao
            receber uma lista de afazeres.
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://to-do-lisst.herokuapp.com"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/lucasfe4nor/to-do-app"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
        <li>
          <div className={style.image}>
            <img src={portfolio} alt="portfolio" />
          </div>
          <h3>Portfólio</h3>
          <p>Meu Portfólio feito com React, totalmente responsivo.</p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://lucasfe4nor.github.io/portfolio"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/lucasfe4nor/portfolio"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
        <li>
          <span className={style.image}>
            <img src={cfpApp} alt="cfpApp" />
          </span>
          <h3>Controle de Finanças Pessoal</h3>
          <p>
            Projeto sugerido pelo Bootcamp Full Stack do IGTI, que consiste em
            desenvolver um controle de finanças pessoal.
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://app-cfp-desafio-final.herokuapp.com"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/lucasfe4nor/app-cfp-bootcampigti"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
      </ul>
    </section>
  );
}
