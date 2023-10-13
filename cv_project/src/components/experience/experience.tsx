import React from "react";
import Course from "../course/course"; 
import styles from './experience.module.scss';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experience__container}>
        <div className={styles.experience__body}>
          <h2 className={styles.experience__title}>Опыт:</h2>
          <div className={styles.experience__list}>
            <Course
              title="SELF-STUDY"
              done="true"
              time="Октябрь 2022 - Декабрь 2022"
              tech="HTML, CSS, SASS, Figma, Gulp"
            />
            <Course
              title="JS/FE PRE-SCHOOL 2022Q4 (JAVASCRIPT)"
              done="true"
              firm="Rolling Scopes School"
              time="Декабрь 2022 - Февраль 2023"
              tech="HTML, CSS, JavaScript, Git, Figma"
              link="https://app.rs.school/certificate/x1tfqvul"
            />
            <Course
              title="JAVASCRIPT/FRONT-END 2023Q1(JAVASCRIPT)"
              done="true"
              firm="Rolling Scopes School"
              time="Март 2023 - Сентябрь 2023"
              tech="JavaScript, TypeScript, SASS, JEST, WebPack, Git, Figma"
              link="https://app.rs.school/certificate/ieunma64"
            />
            <Course
              title="React 2023 Q4"
              done="false"
              firm="Rolling Scopes School"
              time="Октябрь 2023 - Январь 2024"
              tech="React, Compontents, Hooks, API, Redux, GraphiQL"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;