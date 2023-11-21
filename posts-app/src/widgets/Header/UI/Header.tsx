import { Link, NavLink } from 'react-router-dom';
import {
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './Header.module.scss';
import { useAppSelector } from '../../../app/appHooks';
import { changeIsLogged } from '../../../app/appSlice';
import { useDispatch } from 'react-redux';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

export function Header() {
  const dispatch = useDispatch();
  const isUserLogged = useAppSelector(
    (state) => state.userReducer.user.isLogged
  );

  function handleExit() {
    dispatch(changeIsLogged());
  }

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
            {isUserLogged && (
              <li className={styles.item}>
                <NavLink className={setActive} to="/posts">
                  Posts
                </NavLink>
              </li>
            )}
            <li className={styles.item}>
              {isUserLogged && (
                <>
                  <NavLink className={setActive} to="/user">
                    <UserOutlined style={{ padding: '0 5px' }} />
                  </NavLink>
                  {'|'}
                  <NavLink className={setActive} to="/">
                    <UserDeleteOutlined
                      onClick={() => handleExit()}
                      style={{ padding: '0 5px' }}
                    />
                  </NavLink>
                </>
              )}
              {!isUserLogged && (
                <>
                  <NavLink className={setActive} to="/login">
                    <UserAddOutlined style={{ padding: '0 5px' }} />
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
