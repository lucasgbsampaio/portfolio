import React from 'react';

import style from './styles/About.module.css';

export default function About() {
  return (
    <section id="about" className="main">
      <div className={style.spotlight}>
        <div className={style.content}>
          <header className={style.major}>
            <h2>Sobre</h2>
          </header>
          <p>
            Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat
            magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus
            sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet
            aliquam.
          </p>
        </div>
        <span className={style.image}>
          <img src={{}} alt="" />
        </span>
      </div>
    </section>
  );
}
