import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Signup from './Auth/Sign-Log/Signup';
import Login from './Auth/Sign-Log/Login'

function Auth() {
  return (
    <Router>
      <div className="Auth">
        {/* <Link to="/register"> Sign up!</Link> */}
        <Route path="/Register" component={Signup} />
        {/* <Link to="/login"> Sign up!</Link> */}
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default Auth; 