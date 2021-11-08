import {Route, Switch} from "react-router-dom";
import FichaInternamento from "./FichaInternamento";
import './RightArea.css';

function RightArea({dbHasChanged, setDbHasChanged}) {
  
  return (
    <div className="right-area">
      <Switch>
        <Route exact path="/">
          <div/>
        </Route>
        <Route path="/patient/:id(\d+)" 
               render={(props) => <FichaInternamento {...props} setDbHasChanged={setDbHasChanged} dbHasChanged={dbHasChanged} />}/>
        <Route path="*">
          <div>Página não encontrada!</div>
        </Route>
      </Switch>
      
    </div>
  );
}

export default RightArea;
