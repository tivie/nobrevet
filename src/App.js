import './App.css';
import Footer from './components/Footer';
import LeftArea from "./components/LeftArea";
import {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import RightArea from "./components/RightArea";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper container-fluid">
          <LeftArea/>
          <RightArea/>
        </div>
        <Footer copyright="Ana Sofia Salazar"/>
      </Router>
    );
  }
}

export default App;
