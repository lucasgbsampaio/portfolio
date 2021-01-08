import React from 'react';

import style from './styles/About.module.css';

export default function About() {
  return (
    <section id="about" className="main">
      <div className={style.spotlight}>
        <div className={style.content}>
          <header className="major">
            <h2>Sobre</h2>
          </header>
          <p>
            Sou um estudante de desenvolvimento web em busca da primeira
            experiência profissional na área de tecnologia. Escrevi minha
            primeira linha de código aos 12 anos e desde então venho estudando
            por conta própria. Assuntos como ciência e tecnologia fazem parte do
            meu dia a dia e adoro discuti-los. Como desenvolvedor, gosto muito
            do processo de criar algo e sempre estou disposto a aprender coisas
            novas.
          </p>
        </div>
      </div>
    </section>
  );
}
