import React, { useState } from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./landingpage.css";
import Auth from '../Auth/Auth';
const Landing = () => {
  const [toggle, setToggle] = useState(false);
  const Tog = () => setToggle(!toggle);
  return (
    <div className="lending-inner">
      {/* <h1 className="h2">Welcome to the Tavern of the Azure Keys!</h1>
      <p className="p">
        Here you can create and store characters for your upcoming TRPG games,
        or just for a bit of fun!
      </p> */}
      {/* <button onClick={Tog} className='button'>Start Here!</button> */}
            {toggle ? <Auth/> : <div>      
              <h1 className="h2">Welcome to the Tavern of the Azure Keys!</h1>
            <p className="p">
            Here you can create and store characters for your upcoming TRPG games,
            or just for a bit of fun!
              </p>       
      <Router>
        <React.Fragment>
          <Switch>
          <div className='landingpage-btn'>
            <Link to="/login" className="landingpage-link">
              <button onClick={Tog} className='button'>Start Here!</button>
            </Link>
            </div>
          </Switch>
        </React.Fragment>
      </Router>
      </div>  }

    </div>
    
  );
};
export default Landing;