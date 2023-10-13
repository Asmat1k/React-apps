import React from "react";
import styles from './study.module.scss';

const Study = () => {
  return (
    <div className={styles.study}>
      <h3 className={styles.study__title}>Обучение: </h3>
      <div className={styles.study__place}>
        <div className={styles.study__place_title}>БГТУ "ВОЕНМЕХ"</div>
        <div className={styles.study__place_dir}>Направление: Программная инженерия (Бакалавриат)</div>
        <div className={styles.study__place_time}>2021 - 2025</div>
      </div>
    </div>
  )
}

export default Study;