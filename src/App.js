import React, {useEffect, useState} from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import '../src/Components/Landing/landingpage.css'
// import Login from './Components/Auth/Sign-Log/Login'; 
// import Signup from './Components/Auth/Sign-Log/Signup';
import Landing from './Components/Landing/LandingPage';
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Login from './Components/Auth/Sign-Log/Login';
import Create from './Components/Character/CharCreate';
import Footer from './Components/Footer/Footer'
// import Auth from './Components/Auth/Auth'
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Navigation from './Components/Nav/Navbar'

function App() {
  const [toggle, setToggle] = useState(true);
  const Tog = () => setToggle(!toggle);


  
  const [sessionToken, setSessionToken] = useState('');


  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken , '-----------');
  }

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }


  const viewConductor = () => {
    return (sessionToken === localStorage.getItem('token')
    ? <Create token={sessionToken}/> : <Auth updateToken={updateToken}/>)}

    // style={{width: "1200px",
    // margin: "0 auto"}}
  return (
    <div>
      <Navigation/>
      {/* <Landing/> */}
      {/* <Router><Route path="/"><button onClick={Tog} className='button'>Start Here!</button></Route></Router> */}
      {/* { toggle ? <Landing/> : <Auth updateToken={updateToken} token={sessionToken} />}
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
      {/* <Test />
      <T /> */}
      {/* <Create token={sessionToken}/> */}
      {/* <Create/> */}
      {/* <Landing />
      <button onClick={Tog} className='button'>Start Here!</button>
      {toggle ? <Auth/> : null} */}
      <Footer />
    </div>
  );
}

export default App;