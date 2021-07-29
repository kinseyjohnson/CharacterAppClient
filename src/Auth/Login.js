import React, { useState } from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import './login.css';
// import './Auth/login.css'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
            }).then(
                (response) => response.json()
            ).then((data) => {
                props.updateToken(data.sessionToken);
            })
            console.log(email, password);
        }

        return (
            <div className='sign-inner'>
                <h1 style={{
                    textAlign: 'center'
                }}>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input 
                        onChange={(e) => setEmail(e.target.value)} 
                        name="email" 
                        value={email}
                        placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Input
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        placeholder="Password"/>
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        )
    }
    
    export default Login; 