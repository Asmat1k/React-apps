import styles from './projects.module.scss';

const pr_list = [
  {name: "CSS-Selectors", description: "Игра по изучению селекторов CSS", link: "https://css-selectors-asmat1k.netlify.app/" },
  {name: "Minesweeper", description: "Старая добрая игра сапер", link: "https://minesweeper-asmat1k.netlify.app/" },
  {name: "Virtual Keyboard", description: "Виртуальная клавиатура с поддержкой реальной", link: "https://asmat1k.github.io/virtual-keyboard/" },
  {name: "Shelter", description: "Сайт приюта для животных", link: "https://asmat1k.github.io/Shelter/shelter/" },
  {name: "Plants", description: "Сайт по продаже садовых услуг", link: "https://asmat1k.github.io/plants/plants/" },
  {name: "Css Bayan", description: "Обычный аккордион написанный на CSS", link: "https://asmat1k.github.io/cssBayan/cssBayan/index.html" },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h3 className={styles.title}>Проекты: </h3>
      <div className={styles.cards}>
        {pr_list.map((item: Record<string, string>, id) => {
          return (
            <a href={item.link} className={styles.card} key={id} target='_blank' rel="noreferrer">
              <h4 className={styles.name}>{item.name}</h4>
              <div className={styles.descr}>{item.description}</div>
            </a>
          );
        })}
      </div>
    </div>
  )
}

export default Projects;