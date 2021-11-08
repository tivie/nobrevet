import './App.css';
import Footer from './components/Footer';
import LeftArea from "./components/LeftArea";
import {HashRouter as Router} from 'react-router-dom';
import RightArea from "./components/RightArea";
import {useState} from "react";


function App() {
  const [dbHasChanged, setDbHasChanged] = useState(false);
  
  return (
    <Router>
      <div className="page-wrapper container-fluid">
        <LeftArea setDbHasChanged={setDbHasChanged} dbHasChanged={dbHasChanged}/>
        <RightArea/>
      </div>
      <Footer copyright="Ana Sofia Salazar"/>
    </Router>
  );
}

export default App;
