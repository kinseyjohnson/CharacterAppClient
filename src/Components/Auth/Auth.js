import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Signup from './Sign-Log/Signup';
import Login from './Sign-Log/Login';

function Auth() {
  return (
    <Router>
      <div className="Auth">
        {/* <Link to="/register"> Sign up!</Link> */}
        <Route path="/Register" exact component={Signup} />
        {/* <Link to="/login"> Sign up!</Link> */}
        <Route exact path="/login"> <Login /> </ Route>
      </div>
    </Router>
  );
}

export default Auth; 