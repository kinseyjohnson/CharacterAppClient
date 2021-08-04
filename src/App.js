import React, {useState} from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import '../src/Components/Landing/landingpage.css'
// import Auth from './Components/Auth/Auth';
// import Random from './Random';
// import Login from './Components/Auth/Sign-Log/Login'; 
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Auth from './Components/Auth'
// import { Route, BrowserRouter as Router} from 'react-router-dom';
import Landing from './Components/Landing/LandingPage';
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Login from './Components/Auth/Sign-Log/Login';
// import Create from './Components/Character/CharCreate';
// import Auth from './Components/Auth/Auth'
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Nav/Navbar';


function App() {
  const [toggle, setToggle] = useState(true);
  const Tog = () => setToggle(!toggle)


  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)

    // style={{width: "1200px",
    // margin: "0 auto"}}
  return (
    <div>
       <Navigation />
      {/* <Router><Route path="/"><button onClick={Tog} className='button'>Start Here!</button></Route></Router> */}
      {/* { toggle ? <Landing/> : <Auth/>}
      { toggle ? 
      <Router>
        <React.Fragment>
          <Switch>
            <Link to="/login">
              <button onClick={Tog} className='button'>Start Here!</button>
            </Link>
          </Switch>
        </React.Fragment>
      </Router> 
      : null} */}
      {/* <Login /> */}
      {/* {toggle ? <Auth/> : null} */}
      {/* <Signup style={{alignText: 'center'}}/>
      <Login style={{alignText: 'center'}}/> */}
      {/* <Random /> */}
      {/* <Auth /> */}
      {/* <Create/> */}
      {/* <Landing /> */}
      {/* <Auth /> */}
      {/* <button onClick={Tog}
      className="button"
      >Start Here!</button> */}
      {/* <Signup style={{alignText: 'center'}}/> */}
      {/* <Login style={{alignText: 'center'}}/> */}
      <Footer />

      
    </div>
  );
}

export default App;