import { useEffect } from 'react';
import './App.css';
import Header from'./Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import Payment from './Payment.js';
import Orders from './Orders.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51InLs1Hzh5pE7kxpFz9TrY7NDsPoBOaR5cqKc1g6ofhfwNoUbYhC7MuvTpME6BuSc38QjmfF29IaYN36hsaEuwa0000u3WwGPv')

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

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>  
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
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