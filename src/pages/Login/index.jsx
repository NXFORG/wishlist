import React, { useState } from 'react';
import { RegForm } from '../../components/index';
import { LoginForm } from '../../components/index';
import './style.css';

export const Login = () => {
    const [login, setLogin] = useState(false);

    const changeForm = () => {
        setLogin((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={changeForm}>{login ? 'Login' : 'Register'}</button>
            {login ? <RegForm /> : <LoginForm />}
        </>
    )
}