import React from "react";
import styles from './contact.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <ul className={styles.contacts__list}>
        {/* { SOCIALS.map((item, index): any => {
          return (<li className={styles.contacts__item} key={index}>
            <a 
              href="https://www.linkedin.com/in/tim-dobrov-a8781a28a/" 
              className={`${styles.contacts__link} ${styles.linked}`}>
              {item}
            </a>
          </li>)
        }) } */}
        <li className={styles.contacts__item}><a href="https://www.linkedin.com/in/tim-dobrov-a8781a28a/" className={`${styles.contacts__link} ${styles.linked}`}>LinkedIn</a></li>
        <li className={styles.contacts__item}><a href="https://github.com/Asmat1k" className={`${styles.contacts__link} ${styles.github}`}>GitHub</a></li>
        <li className={styles.contacts__item}><a href="https://t.me/asmat1k" className={`${styles.contacts__link} ${styles.telegram}`}>Telegram</a></li>
        <li className={styles.contacts__item}><a href="mailto:dobrovtimofey18@gmail.com" className={`${styles.contacts__link} ${styles.gmail}`}>Gmail</a></li>
      </ul>
    </div>
  )
}

export default Contacts;