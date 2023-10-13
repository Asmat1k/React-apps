import React from "react";
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <h3 className={styles.about__title}>О себе:</h3>
      <p className={styles.about__text}>
        Привет, меня зовут Тима. Я изучаю фронтенд с 2022 года, изначально я просто изучал верстку по
        YouTube, затем я начал немного пробовать JavaScript, читая различные статьи на сайтах, как learnJS и т.п. . 
        После я узнал о курсах от RSS и в скором времени прошел подготовку к ним (0-й стейдж) и вскоре прошел (1-2 стейдж).
        Во время курсов я прошел 4 собеседования и изучил много новых для меня технологий. Также знаком с NodeJs. 
      </p>
    </div>
  )
}

export default About;