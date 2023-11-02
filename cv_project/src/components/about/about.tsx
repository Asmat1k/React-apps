import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <h3 className={styles.title}>О себе:</h3>
      <p className={styles.text}>
        Привет, меня зовут Тима. Я студент 3-го курса БГТУ "ВОЕНМЕХ", учусь на специальности "Программная инженерия". Увлекаюсь веб разработкой с октября 2022 года, совмещая её с основной учебой.
        Изначально я просто верстал простые сайты, затем понемногу начал пробовать JavaScript, после я прошел 3 этапа Rolling Scopes School.
        На них я изучил много новых и интересных технологий, попробовав как backend, так и frontend, и прошел несколько собеседований по JavScript. Сейчас учу React.
      </p>
    </div>
  )
}

export default About;