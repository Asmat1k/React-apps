import './styles/nullstyle.scss';
import './styles/App.scss';
import Header from './components/header/header';
import Experience from './components/experience/experience';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Experience />
      </main>
    </div>
  );
}

export default App;
