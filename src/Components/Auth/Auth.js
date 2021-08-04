import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Signup from './Sign-Log/Signup';
import Login from './Sign-Log/Login'

function Auth(props) {
  return (
    <div>
          <Router>
      <Switch>
        <div className="Auth">
          {/* <Link to="/register"> Sign up!</Link> */}
          <Route path="/register" ><Signup updateToken={props.updateToken} token={props.token} /></Route>
          {/* <Link to="/login"> Sign up!</Link> */}
          <Route path="/login"><Login updateToken={props.updateToken} token={props.token} /></Route>
        </div>
      </Switch>
    </Router>
    </div>

  );
}

export default Auth; 