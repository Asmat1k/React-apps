import './styles/nullstyle.scss';
import './styles/App.scss';
import Header from './components/header/header';
import Experience from './components/experience/experience';
import Contacts from './components/contact/contact';
import About from './components/about/about';
import Tech from './components/tech/tech';
import Study from './components/study/study';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Experience />
        <section className='block'>
          <Contacts />
          <About />
          <Study />
          <Tech />
        </section>
      </main>
    </div>
  );
}

export default App;
