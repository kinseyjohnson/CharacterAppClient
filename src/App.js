import React, {useState} from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
// import Random from './Random';
// import Login from './Components/Auth/Sign-Log/Login'; 
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Auth from './Components/Auth'
// import { Route, BrowserRouter as Router} from 'react-router-dom';
import Landing from './Components/LandingPage';
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Login from './Components/Auth/Sign-Log/Login';
// import Create from './Components/Character/CharCreate';
// import Auth from './Components/Auth/Auth'

function App() {
  const [toggle, setToggle] = useState(false);
  const Tog = () => setToggle(!toggle)

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)


  return (
    <div>
      <button onClick={Tog}
      className="button"
      style={{
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%"
      }}>Start Here!</button>
      { toggle ? <Auth /> : null}
      {/* <Signup style={{alignText: 'center'}}/>
      <Login style={{alignText: 'center'}}/> */}
      {/* <Random /> */}
      {/* <Auth /> */}
      {/* <Create/> */}
      <Landing />
      {/* <Signup style={{alignText: 'center'}}/> */}
      {/* <Login style={{alignText: 'center'}}/> */}
    </div>
  );
}

export default App;
