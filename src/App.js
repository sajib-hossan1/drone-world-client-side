import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navigation from './shared/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/context/AuthProvider';
import Explore from './components/Explore/Explore';
import Footer from './shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
            <Navigation></Navigation>
            <Switch>
                <Route exact path='/'>
                <Home></Home>
                </Route>
                <Route exact path='/home'>
                <Home></Home>
                </Route>
                <Route path='/explore'>
                <Explore></Explore>
                </Route>
                <Route path='/login'>
                <Login></Login>
                </Route>
                <Route path='/register'>
                <Register></Register>
                </Route>
                <Route path='/aboutUs'>
                <AboutUs></AboutUs>
                </Route>
                <Route path='*'>
                <NotFound></NotFound>
                </Route>
            </Switch>
            <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
