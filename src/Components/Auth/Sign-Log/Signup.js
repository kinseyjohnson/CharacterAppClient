import React, {useState} from "react";
import './sign-log.css';
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Login from './Login';


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState(false)
    const [sayWarning, setSayWarning] = useState('Email')



    let clearInputs = () => {
        setEmail('');
        setPassword('');
        setUsername('');
    }


    let handleSumbit = (e) => {
        console.log(props, '++++++++++++++++++++')
        e.preventDefault();
        // const url = 'http://localhost:3000/user/register';
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email,
                    password,
                    username
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then((data) => {
            props.updateToken(data.sessionToken)
            console.log(data)
            console.log(data.sessionToken, '++++++++++++++++')
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
                name='username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder='Username'
                pattern='[\w]{4,}'
                title='At least 4 character and one number or special symbol'/>
                <input type="text" 
                name='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={sayWarning}
                className={toggle === true ? "warning" : null}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="It mast be email"/> 
                <input type="password" 
                name='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password'
                pattern="[a-zA-z0-9]{5,}"
                title="At least 5 characters"/>
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