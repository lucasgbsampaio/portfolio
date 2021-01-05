import React from 'react';

import style from './styles/Projects.module.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className={style.container}>
        <h3>Projetos recentes</h3>
        <p>
          Integer eu ante ornare amet commetus vestibulum blandit integer in
          curae ac faucibus integer non. Adipiscing cubilia elementum integer.
          Integer eu ante ornare amet commetus.
        </p>
        <div className={style.features}>
          <article>
            <a href={{}} className={style.image}>
              <img src="images/pic01.jpg" alt="" />
            </a>
            <div className={style.inner}>
              <h4>a</h4>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
            </div>
          </article>
          <article>
            <a href={{}} className={style.image}>
              <img src="images/pic02.jpg" alt="" />
            </a>
            <div className={style.inner}>
              <h4>b</h4>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
            </div>
          </article>
          <article>
            <a href={{}} className={style.image}>
              <img src="images/pic03.jpg" alt="" />
            </a>
            <div className={style.inner}>
              <h4>c</h4>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
            </div>
          </article>
          <article>
            <a href={{}} className={style.image}>
              <img src="images/pic03.jpg" alt="" />
            </a>
            <div className={style.inner}>
              <h4>d</h4>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
            </div>
          </article>
          <article>
            <a href={{}} className={style.image}>
              <img src="images/pic03.jpg" alt="" />
            </a>
            <div className={style.inner}>
              <h4>e</h4>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
            </div>
          </article>
          <article>
            <a href={{}} className={style.image}>
              <img src="images/pic03.jpg" alt="" />
            </a>
            <div className={style.inner}>
              <h4>f</h4>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
