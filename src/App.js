import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar';
import Portfolio from './components/Project-Cards/wrapper';
import Jumbotron from './components/Jumbotron/jumbotron';
import About from './components/AboutMe/about-me';
import Modal from './components/Contact-Info/modal';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Modal/>
      <Jumbotron/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
