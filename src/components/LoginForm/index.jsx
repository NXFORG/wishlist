import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
//import './style.css';

export const LoginForm = () => {
    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const tryLogin = (data) => {
        const decodedToken = jwt_decode(data.token);
        localStorage.setItem('username', decodedToken.username);
        localStorage.setItem('token', data.token);
        window.open('/gift')
    }

    useEffect(() => {
        if(login){
            const loginUser = async () => {
                try {
                    let response = await fetch(`http://localhost:3000/users/login`, {
                        method: "POST",
                        body: JSON.stringify({username: username, password: password}),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    });
                    let jsonResponse = await response.json();
                    jsonResponse ? tryLogin(jsonResponse) : alert('Please try again.')
                } catch(err) {
                    console.log(err);
                }
            }
            loginUser();
        }
    },[login])

    const handleUser = (e) => {
        setUsername(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' onChange={handleUser}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={handlePass}/>
                <input type='submit'/>
            </form>
        </>
    )
}