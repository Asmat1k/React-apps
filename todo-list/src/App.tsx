import './styles/nullstyle.scss';
import styles from './App.module.scss';
import './styles/fonts.scss';

import Main from './components/main';

function App() {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
}

export default App;
