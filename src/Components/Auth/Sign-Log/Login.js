import React, { useState, useContext } from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import './sign-log.css';
// import './Auth/login.css'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Signup from './Signup';
import { Context } from '../../../Context';
import APIURL from '../../../helpers/environment';

const Login = (props) => {
    const {updateName} = useContext(Context);
    const {updateToken} = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newToggle, setNewToggle] = useState(false)
// const [login, setLogin] = useState(true);

let clearInputs = () => {
    setEmail('');
    setPassword('');
}

    const handleSubmit = (event) => {
        // console.log(props)
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({
                user:{
                    email: email, 
                    password: password
                }
            }),
            headers: new Headers({
                "Content-Type": 'application/json',
            })
            }).then(
                (response) => response.json()
            ).then((data) => {
                // console.log(data)
                // console.log(data.message);
                if (data.sessionToken === undefined){
                    setNewToggle(!newToggle)
                    
                }
                if (data.sessionToken !== undefined && data.user.username !== undefined) {
                    updateToken(data.sessionToken);
                    updateName(data.user.username)
                    // console.log(data.sessionToken);
                    // console.log(data)
                    clearInputs()
                    
                }
            })
            // console.log(email, password);
        }
        return (
            <div className='sign-log-inner'>
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <Form onSubmit={handleSubmit}>
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

                    {newToggle ? <p className='warning-text'>Incorrect password or Email</p> : null}
                </Form>
                {/* <Router> */}
                    <Switch>
                    <div className='sign-up'>
                        <h3 style={{fontFamily: 'arial', marginTop: '15px'}}>Don't have an account?
                        <Link to="/register"> Sign up!</Link>
                        <Route path='/register' exact component={Signup} />
                    </h3>
                    </div>
                    </Switch>
                {/* </Router> */}
            </div>
        )
    }
    
    export default Login; 