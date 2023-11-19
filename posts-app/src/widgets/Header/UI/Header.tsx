import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </header>
  );
}
