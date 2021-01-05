import React from 'react';

import style from './styles/Footer.module.css';

export default function Footer() {
  return (
    <section id="footer">
      <div className={style.container}>
        <ul className={style.copyright}>
          <li>&copy; Untitled. All rights reserved.</li>
        </ul>
      </div>
    </section>
  );
}
