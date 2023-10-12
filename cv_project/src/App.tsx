import './styles/nullstyle.scss';
import './styles/App.scss';
import Header from './components/header/header';
import Experience from './components/experience/experience';
import Contacts from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Experience />
        <section className='block'>
          <Contacts />
        </section>
      </main>
    </div>
  );
}

export default App;
