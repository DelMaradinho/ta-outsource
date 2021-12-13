import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Outsource from './components/Outsource/Outsource';
import Logo from './components/Logo/Logo'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/1" component={Outsource}/>
          <Route path="/2" component={Logo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
