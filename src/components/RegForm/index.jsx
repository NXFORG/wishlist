import React, { useState, useEffect } from 'react';
//import './style.css';

export const RegForm = () => {
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');

    useEffect(() => {
        if(register){
            const regUser = async () => {
                try {
                    await fetch(`http://localhost:3000/users/register`, {
                        method: "POST",
                        body: JSON.stringify({username: username, password: password }),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    })
                    alert('Registration Successful')
                } catch(err) {
                    console.log(err);
                }
            }
            regUser();
        }
    }, [register])

    const handleUser = (e) => {
        setUsername(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirm = (e) => {
        setConfPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confPass){
            setRegister(true);
        } else {
            alert('Passwords do not match')
        }
        console.log('register');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' onChange={handleUser}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={handlePass}/>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='password' name='confirmPassword' onChange={handleConfirm}/>
                <input type='submit'/>
            </form>
        </>
    )
}