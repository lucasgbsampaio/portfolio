import React from 'react';

import banner from '../assets/images/banner.jpg';

import style from './styles/About.module.css';

export default function About() {
  return (
    <section id="about">
      <div className={style.banner}>
        <img src={banner} alt="" />
      </div>
      <div className={style.container}>
        <header className={style.major}>
          <h2>Read Only</h2>
          <p>
            a<br />c<a href="http://html5up.net">b</a>b.
          </p>
        </header>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet
          tortor ultricies non ante erat nunc integer eu ante ornare amet
          commetus vestibulum blandit integer in curae ac faucibus integer non.
          Adipiscing cubilia elementum.
        </p>
      </div>
    </section>
  );
}
