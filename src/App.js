
import './App.css';
import MyMaps from './MyMaps'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
  
      <div className="App">
        <Router>
          <div>
            <Switch>
            <Route exact path="/mymaps" component = { MyMaps } />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
  

  

export default App;