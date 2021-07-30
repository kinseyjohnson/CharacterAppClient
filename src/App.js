import React from 'react';
import './App.css';
import Landing from './Components/LandingPage';
import Signup from './Components/Auth/Sign-Log/Signup';
import Login from './Components/Auth/Sign-Log/Login'

function App() {

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)
  

  return (
    <div>
      <Landing />
      <Signup style={{alignText: 'center'}}/>
      <Login style={{alignText: 'center'}}/>
    </div>
  );
}

export default App;
