import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.main}>
            <h1 className={styles.title}>
              Тимофей Добров
            </h1>
            <h4>
              JavaScript разработчик
            </h4>
          </div>
          <div className={styles.info}>
            <div>Санкт-Петербург / Петрозаводск</div>
            <div>20 лет</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;