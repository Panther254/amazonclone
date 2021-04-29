import './App.css';
import Header from'./Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router>
      <Header />
       <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;