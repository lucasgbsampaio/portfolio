import React from 'react';

import style from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id={style.footer}>
      <p className={style.copyright}>&copy; Lucas Sampaio | 2021</p>
    </footer>
  );
}
