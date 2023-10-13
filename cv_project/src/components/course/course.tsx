import MyLink from "../UI/link/myLink";
import styles from './course.module.scss';

const Course = ({title, done, firm, time, tech, link }: Record<string, string>) => {
  return (
    <div className={styles.course}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            { done === "true" ?
              <div className={styles.done}>Выполнен</div>
              : 
              <div className={styles.in_progress}>В процессе</div>
            }
          </div>
          <div className={styles.firm}>{firm}</div>
          <div className={styles.time}>{time}</div>
          <div className={styles.tech}>Технологии: {tech}</div>
          { link ? <MyLink link={link}/> : "" }
        </div>
      </div>
    </div>
  )
}

export default Course;