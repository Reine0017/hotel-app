import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import { HomePage } from "./pages/HomePage/HomePage"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/login"
            component={LoginPage}
          />
          <Route
            path="/"
            component={HomePage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
