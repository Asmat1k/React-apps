import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.header__container}>
        <div className={styles.header__body}>
          <div className={styles.header__main}>
            <h1 className={styles.header__title}>
              Тимофей Добров
            </h1>
            <h4>
              JavaScript разработчик
            </h4>
          </div>
          <div className={styles.header__info}>
            <div>Санкт-Петербург</div>
            <div>20 лет</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;