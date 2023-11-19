import { Link, NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import styles from './Header.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

export function Header() {
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.logo}>
        <h1 className={styles.title}>RNDM</h1>
        <h2 className={styles.subt}>POSTS</h2>
      </Link>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink className={setActive} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink className={setActive} to="/posts">
                Posts
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink className={setActive} to="/user">
                <UserOutlined />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
