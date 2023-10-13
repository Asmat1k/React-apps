import styles from './contact.module.scss';

const SOCIALS = ['linkedin', 'github', 'telegram', 'gmail'];
const HREF = [
  'https://www.linkedin.com/in/tim-dobrov-a8781a28a/',
  'https://github.com/Asmat1k',
  'https://t.me/asmat1k',
  'mailto:dobrovtimofey18@gmail.com',
];

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h3 className={styles.contacts__title}>Контакты: </h3>
      <ul className={styles.contacts__list}>
        { SOCIALS.map((item: string, index: number) => {
          return (<li className={styles.contacts__item} key={index}>
            <a 
              target="_blank"
              href={HREF[index]} 
              className={`${styles.contacts__link} ${styles[item]}`} 
              rel="noreferrer">
              {item}
            </a>
          </li>)
        }) }
      </ul>
    </div>
  )
}

export default Contacts;