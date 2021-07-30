import React from 'react';
import './App.css';
// import Login from './Components/Auth/Sign-Log/Login'; 
// import Signup from './Components/Auth/Sign-Log/Signup';
import Auth from './Components/Auth'
// import { Route, BrowserRouter as Router} from 'react-router-dom';

function App() {

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)
  

  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
