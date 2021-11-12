import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navigation from './shared/Navigation/Navigation';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation></Navigation>
        <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
