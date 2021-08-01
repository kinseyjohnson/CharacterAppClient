import React, {useState} from "react";
import './sign-log.css';
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Login from './Login';


const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState(false)
    const [sayWarning, setSayWarning] = useState('Email')



    let clearInputs = () => {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }


    let handleSumbit = (e) => {
        e.preventDefault();
        // const url = 'http://localhost:3000/user/register';
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email,
                    password,
                    firstName,
                    lastName
                }
            }),
            headers: new Headers({
                "Content-Type": 'application/json'
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            console.log(data.sessionToken)
            if (data.sessionToken === undefined){
                setToggle(true);
                setSayWarning('This email address is already used')
            } else {
                setToggle(false);
                setSayWarning('Email')
            }
            clearInputs()
        })

    }
    return(
        <div className='sign-inner'>
            <h1>Get Started</h1>
            <form onSubmit={handleSumbit}>
                <input type="text" 
                name='firstName' 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name'/>
                <input type="text" 
                name='lastName' 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder='Last Name'/>
                <input type="text" 
                name='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={sayWarning}
                className={toggle === true ? "warning" : null}/>
                <input type="password" 
                name='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password'/>
                <button type="submit">Sign Up</button>
                {/* <Router> */}
                    <Switch>
                    <div className='login'>
                        <h3 style={{fontFamily: 'arial'}}>Already have an account?
                            <Link to="/login"> Login!</Link>
                            <Route path='/login' exact component={Login} />
                        </h3>
                    </div>
                    </Switch>
                {/* </Router> */}
            </form>
        </div> 
    )
}

export default Signup;