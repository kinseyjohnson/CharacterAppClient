import React, { useState } from "react";
import Login from "./Sign-Log/Login";
import Signup from "./Sign-Log/Signup";


const Auth = (props) => {



    return(
        <>
        <Login />
        <Signup />
            {/* { toggle ? <Login /> : <Signup /> } */}
        </>

    )
}

export default Auth;