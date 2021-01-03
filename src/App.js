import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar/navbar';
// import Portfolio from './components/Project-Cards/wrapper';
// import Jumbotron from './components/Jumbotron/jumbotron';
// import About from './components/AboutMe/about-me';
import Modal from './components/Contact-Info/modal';
import AboutMePage from "./pages/AboutMe";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Modal/>
      <Router>
        <Switch>
        <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/index">
            <HomePage/>
          </Route>
          <Route exact path="/aboutMe">
            <AboutMePage/>
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
