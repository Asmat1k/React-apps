import styles from './myTitle.module.scss';

interface Props {
  title: string,
}

function MyTitle({title}: Props) {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
}

export default MyTitle;
