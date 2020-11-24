import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Root from './components/Dashboard/root';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            strict
            component={Root}
          />
          <Route
            path='/Tacos'
            exact
            strict
            component={Root}
          />
          <Route
            path='/Beers'
            exact
            strict
            component={Root}
          />
          <Route
            path='/Wines'
            exact
            strict
            component={Root}
          />
          <Route
            path='/Desserts'
            exact
            strict
            component={Root}
          />
          <Route
            path='/Reservations'
            exact
            strict
            component={Root}
          />
        </Switch>
      </Router>
    </div>
  )
}
export default App;