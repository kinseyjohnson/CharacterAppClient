import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Login from "../Auth/Sign-Log/Login";
import Register from "../Auth/Sign-Log/Signup";
import CreateChar from "../Character/CharCreate";
import Landing from "../Landing/LandingPage";
// import CharTable from "../Character/CharacterTable";
import CharacterIndex from '../Character/CharacterIndex';
import "./navbar.css";

export default function Navigation() {
  return (
    <Router>
      <ul>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "White" }}
            to="/"
            activeClassName="main-nav-active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "White" }}
            to="/login"
            activeClassName="main-nav-active"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "White" }}
            to="/register"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "White" }}
            to="/create"
            activeClassName="main-nav-active"
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "White" }}
            to="/account"
            activeClassName="main-nav-active"
          >
            My Account
          </NavLink>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
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
          <CharacterIndex />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <div></div>;
}
