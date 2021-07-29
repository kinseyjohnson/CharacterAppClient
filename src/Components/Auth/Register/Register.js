import React, {useState} from "react";


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    let handleSumbit = (e) => {
        e.preventDefault();
        // const url = 'http://localhost:3000/user/register';
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }
            }),
            headers: new Headers({
                "Content-Type": 'application/json'
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data.sessionToken)
        })
        // .then(json => console.log(json))
    }
    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSumbit}>
            <input type="text" 
            name='firstName' 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='first name'/>
            <input type="text" 
            name='lastName' 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder='last name'/>
            <input type="text" 
            name='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='email'/>
            <input type="password" 
            name='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='password'/>
            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;