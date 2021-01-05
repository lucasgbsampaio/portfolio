import React from 'react';

import style from './styles/Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="main special">
      <header className="major">
        <h2>Skills</h2>
      </header>
      <ul className={style.skills}>
        <li className={style.style1}>HTML5</li>
        <li className={style.style2}>CSS3</li>
        <li className={style.style3}>Javascript</li>
        <li className={style.style4}>Git</li>
        <li className={style.style5}>Bootstrap</li>
      </ul>
      <ul className={style.skills}>
        <li className={style.style1}>React.js</li>
        <li className={style.style2}>Express.js</li>
        <li className={style.style3}>Node.js</li>
        <li className={style.style4}>MongoDB</li>
        <li className={style.style5}>PostgreSQL</li>
      </ul>
    </section>
  );
}
