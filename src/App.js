import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Component } from 'react';
import MainPage from './Components/index';
import NotFoundPage from './Components/404';
import PongGame from './Components/PongGame';

//Components
class App extends Component {
  
  
  
  
  
  
  
  
  
  
  
  render() {
    return <div className="App">
    
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/404"component={NotFoundPage}/>
      <Route exact path="/PongGame" component={PongGame}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>

    </div>
    
  }
  
}

export default App;
