import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/context/AuthProvider';
import Explore from './components/Explore/Explore';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BuyNow from './components/BuyNow/BuyNow';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
            <Switch>
                <Route exact path='/'>
                <Home></Home>
                </Route>
                <Route exact path='/home'>
                <Home></Home>
                </Route>

                <PrivateRoute path='/dashboard'>
                  <DashBoard></DashBoard>
                </PrivateRoute>

                <PrivateRoute path="/buyNow/:id">
                  <BuyNow></BuyNow>
                </PrivateRoute>
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
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
