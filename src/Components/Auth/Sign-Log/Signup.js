import React, {useState, useContext} from "react";
import './sign-log.css';
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Login from './Login';
import { Context } from "../../../Context";
import { Button } from "reactstrap";


const Signup = (props) => {
    const {updateName} = useContext(Context);
    const {updateToken} = useContext(Context);
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
            console.log(data.user.username)
            updateName(data.user.username)
            updateToken(data.sessionToken)
            // console.log(data)
            // console.log(data.sessionToken, '++++++++++++++++')
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
        <div className='sign-log-inner'>
            <h1>Get Started</h1>
            <form onSubmit={handleSumbit}>
                <input type="text" 
                name='username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder='Username'
                pattern='(?=.*\d)[\w]{4,}'
                // pattern='^(?=.*\d)[\w]{4,}$|^(?=.*[#$@!%&*?])[\w]{4,}$|^(?=.*\d)[\w]{4,}$|^(?=.*[#$@!%&*?])[\w]{4,}$'
                title='At least 4 character and one number'/>
                <input type="text" 
                name='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={sayWarning}
                className={toggle === true ? "warning" : null}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="For example test@test.com"/> 
                <input type="password" 
                name='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password'
                pattern="[a-zA-z0-9]{5,}"
                title="At least 5 characters"/>
                <Button type="submit">Sign Up</Button>
                {/* <Router> */}
                    <Switch>
                    <div className='login'>
                        <h3 style={{fontFamily: 'arial', marginTop: '15px'}}>Already have an account?
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