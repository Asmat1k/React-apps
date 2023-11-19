import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

export function Header() {
  return (
    <header className={styles.container}>
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      <NavLink className={setActive} to="/posts">
        Posts
      </NavLink>
    </header>
  );
}
