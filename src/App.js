import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Work from './components/Work/work';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;