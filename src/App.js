import React from 'react';
import './App.css';
import Auth from './Auth/Login'; 

function App() {

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)
  

  return (
    <div>
      <Auth style={{alignText: 'center'}}/>
    </div>
  );
}

export default App;
