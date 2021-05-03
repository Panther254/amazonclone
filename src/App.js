import { useEffect } from 'react';
import './App.css';
import Header from'./Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();
  
  useEffect(() =>{

    auth.onAuthStateChanged((authUser) =>{

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: '',
        });
      }
    });
  },[]);

  return (
    <div className="app">
    <Router>
       <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;