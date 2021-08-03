import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../Auth/Sign-Log/Login';
import Register from '../Auth/Sign-Log/Signup';
import Account from '../Account/Account';
import CreateChar from '../Character/CharCreate';
import Landing from '../Landing/LandingPage';
import './navbar.css';

export default function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link  to="/landing">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
          <Link to="/create">Create Characters</Link>
          </li>
          <li>
          <Link to="/account">My Account</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/home">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/create">
            <CreateChar />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
    </div>
  );
}




