import {Route, Switch} from "react-router-dom";
import FichaInternamento from "./FichaInternamento";
import './RightArea.css';

function RightArea() {
  
  return (
    <div className="right-area">
      <Switch>
        <Route exact path="/">
          <div/>
        </Route>
        <Route path="/patient/:id(\d+)" component={FichaInternamento}/>
        <Route path="*">
          <div>Página não encontrada!</div>
        </Route>
      </Switch>
      
    </div>
  );
}

export default RightArea;
