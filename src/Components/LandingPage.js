import React from 'react';
import './landingpage.css'
import Register from './Auth/Register/Register';


const Landing = () => {

    const showRegister = {
        return(
            
        )
    }

    return(
        <div className='mainDiv'>
        <h1 className='h2'>Welcome to the Tavern of the Azure Keys!</h1>
        <p className='p'>Here you can create and store characters for your upcoming TRPG games, or just for a bit of fun!</p>
            <button onClick={showRegister}className='button'>Start Here!</button>
        </div>
    )
}

export default Landing;