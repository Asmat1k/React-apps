import styles from './main.module.scss';

import MyTitle from '../UI/myTitle';
import Form from '../form';

function Main() {


  return (
    <main className={styles.main}>
      <MyTitle title={"todo app"} />
      <Form />
    </main>
  );
}

export default Main;
