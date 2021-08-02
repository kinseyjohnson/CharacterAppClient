import React, {useState} from "react";
import './sign-log.css';
// import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import {Form, FormGroup, Input, Button} from 'reactstrap';
// import Login from './Login';


const SignLog = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState(false)
    const [sayWarning, setSayWarning] = useState('Email')

    // console.log(runLogSign)

    let handleSumbit = (e) => {
        e.preventDefault();
        // const url = 'http://localhost:3000/user/register';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    reqBody
                }
            }),
            headers: new Headers({
                "Content-Type": 'application/json'
            })
        })
        .then(res => res.json())
        .then((data) => {
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

    let clearInputs = () => {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }


    let url = props.toggle ? 'http://localhost:3000/user/login'
    : 'http://localhost:3000/user/register';

    let reqBody = props.toggle ? {
        email: email, 
        password: password
    } : {
        email,
        password,
        firstName,
        lastName
    };

    let field = props.toggle 
    ? (
        <div className='sign-inner'>
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <Form onSubmit={handleSumbit}>
                    <FormGroup>
                        <Input 
                        onChange={(e) => setEmail(e.target.value)} 
                        name="email" 
                        value={email}
                        placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        placeholder="Password"/>
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
                        <div className='sign-up'>
                            <h3 style={{fontFamily: 'arial'}}>Don't have an account?
                            {/* <button onClick={runLogSign.runLogSign()}>sing up</button> */}
                            </h3>
                        </div>
            </div>
    )
    : (
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
                        <div className='login'>
                            <h3 style={{fontFamily: 'arial'}}>Already have an account?
                            </h3>
                        </div>
            </form>
            {/* <button onClick={runLogSign.runLogSign()}>login</button> */}
        </div>
    )


    return(
        <>
        {field}
        </>
    )
}

export default SignLog;
