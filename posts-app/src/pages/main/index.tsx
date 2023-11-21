import { QRCode } from 'antd';
import styles from './main.module.scss';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.qr}>
        <QRCode size={310} value="https://jsonplaceholder.typicode.com/" />
      </div>
      <div className={styles.info}>
        <div className={styles.head}>
          <h2 className={styles.title}>RNDM POSTS</h2>
          <h3 className={styles.subt}>-from &lt;Json&gt;Placeholder-</h3>
        </div>
        <div className={styles.text}>
          <Link className={styles.link} to="login">
            LOGIN
          </Link>{' '}
          or{' '}
          <Link className={styles.link} to="reg">
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
