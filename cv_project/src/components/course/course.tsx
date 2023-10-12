import React from "react";
import MyLink from "../UI/link/myLink";
import styles from './course.module.scss';

const Course = ({title, done, firm, time, tech, link }: Record<string, string>) => {
  return (
    <div className={styles.course}>
      <div className={styles.course__container}>
        <div className={styles.course__body}>
          <div className={styles.course__info}>
            <h3 className={styles.course__title}>{title}</h3>
            { done === "true" ?
              <div className={styles.done}>Выполнен</div>
              : 
              <div className={styles.in_progress}>В процессе</div>
            }
          </div>
          <div className={styles.course__firm}>{firm}</div>
          <div className={styles.course__time}>{time}</div>
          <div className="course__text">Технологии: {tech}</div>
          { link ? <MyLink link={link}/> : "" }
        </div>
      </div>
    </div>
  )
}

export default Course;