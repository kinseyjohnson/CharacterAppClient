import React, {useState} from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
// import Random from './Random';
// import Login from './Components/Auth/Sign-Log/Login'; 
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Auth from './Components/Auth'
// import { Route, BrowserRouter as Router} from 'react-router-dom';

function App() {

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)
    const [toggle, setToggle] = useState(false);
    const Tog = () => setToggle(!toggle) 

  return (
    <div>
      <button onClick={Tog} style={{
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%"
      }}>Button</button>
      { toggle ? <Auth /> : null}
      {/* <Signup style={{alignText: 'center'}}/>
      <Login style={{alignText: 'center'}}/> */}
      {/* <Random /> */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
