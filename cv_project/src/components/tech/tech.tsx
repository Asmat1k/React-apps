import React from "react";
import styles from './tech.module.scss';

const tech = [
  'html',
  'css',
  'sass',
  'js',
  'ts',
  'jest',
  'webpack',
  'gulp',
  'git',
  'github',
 'figma',
];

const Tech = () => {
  return (
    <div className={styles.tech}>
      <h3 className={styles.tech__title}>Технологии: </h3>
      <div className={styles.tech__stack}>
        { tech.map((item: any, id: any) => {
          console.log(styles.tech__name);
          return (
            <div className={`${styles.tech__name} ${styles[item]}`} key={id}>{item}</div>
          )
        }) }
      </div>
    </div>
  )
}

export default Tech;