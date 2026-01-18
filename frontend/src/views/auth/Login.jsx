
import React, { useState, useEffect } from 'react'
import { login } from '../../utils/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'


function Login() {
    const [ username, setUsername ] = useState("Manoj");

    console.log(username)
    const navigate = useNavigate()


    return (
        <div>Login
            <h2>dfdffd</h2>
        </div>
    )
}

export default Login