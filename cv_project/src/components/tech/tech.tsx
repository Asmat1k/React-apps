import styles from './tech.module.scss';

const tech = [
  'html',
  'css',
  'sass',
  'js',
  'node',
  'ts',
  'react',
  'jest',
  'webpack',
  'gulp',
  'git',
  'github',
  'figma',
];

const Tech = () => {
  return (
    <div className={styles.tech}>
      <h3 className={styles.title}>Технологии: </h3>
      <div className={styles.stack}>
        { tech.map((item: string, id: number) => {
          return (
            <div className={`${styles.name} ${styles[item]}`} key={id}>{item}</div>
          )
        }) }
      </div>
    </div>
  )
}

export default Tech;