import styles from './study.module.scss';

const Study = () => {
  return (
    <div className={styles.study}>
      <h3 className={styles.title}>Обучение: </h3>
      <div className={styles.place}>
        <div className={styles.place_title}>БГТУ "ВОЕНМЕХ" им. Д.Ф. Устинова</div>
        <div className={styles.place_dir}>Программная инженерия (Бакалавриат)</div>
        <div className={styles.place_time}>2021 - 2025</div>
      </div>
    </div>
  )
}

export default Study;