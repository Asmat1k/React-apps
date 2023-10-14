import styles from './projects.module.scss';

const pr_list = [
  {name: "CSS-Selectors", description: "Игра по изучению селекторов CSS", deploy: "https://css-selectors-asmat1k.netlify.app/", link: "https://github.com/Asmat1k/CSS-Selectors"},
  {name: "Minesweeper", description: "Старая добрая игра сапер", deploy: "https://minesweeper-asmat1k.netlify.app/", link: "https://github.com/Asmat1k/Minesweeper" },
  {name: "Virtual Keyboard", description: "Виртуальная клавиатура с поддержкой реальной", deploy: "https://asmat1k.github.io/virtual-keyboard/", link: "https://github.com/Asmat1k/virtual-keyboard" },
  {name: "Shelter", description: "Сайт приюта для животных", deploy: "https://asmat1k.github.io/Shelter/shelter/", link: "https://github.com/Asmat1k/Shelter" },
  {name: "Plants", description: "Сайт по продаже садовых услуг", deploy: "https://asmat1k.github.io/plants/plants/", link: "https://github.com/Asmat1k/plants" },
  {name: "Css Bayan", description: "Обычный аккордион написанный на CSS", deploy: "https://asmat1k.github.io/cssBayan/cssBayan/index.html", link: "https://github.com/Asmat1k/cssBayan" },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h3 className={styles.title}>Проекты: </h3>
      <div className={styles.cards}>
        {pr_list.map((item: Record<string, string>, id) => {
          return (
            <div  className={styles.card} key={id}>
              <div className={styles.info}>
                <h4 className={styles.name}>{item.name}</h4>
                <div className={styles.descr}>{item.description}</div>
              </div>
              <div className={styles.links}>
                <a href={item.link} target='_blank' rel="noreferrer" className={styles.link}>github</a>
                <a href={item.deploy} target='_blank' rel="noreferrer" className={styles.link}>deploy</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Projects;