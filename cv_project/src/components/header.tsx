import React from "react";
import '../styles/header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-body">
          <div className="header__main">
            <h1 className="header__title">
              Тимофей Добров
            </h1>
            <h4 className="header__subtitle">
              Frontend разработчик
            </h4>
          </div>
          <div className="header__info">
            <div className="header__city">Санкт-Петербург</div>
            <div className="header__age">20 лет</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;