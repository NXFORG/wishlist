import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GiftForm } from '../../components/index';
//import './style.css';

export const Gift = () => {
    const [form, setForm] = useState(false);
    const [type, setType] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const checkLogin = () => {
            if(!localStorage.getItem('username') && !localStorage.getItem('token')){
                navigate('/');
            }
        }
        checkLogin();
    },[])

    const handleType = (e) => {
        setType(e.target.value);
        setForm(false);
    }

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setForm(true);
    }

    return (
        <>
        <div>
            <Link id='logoutBtn' onClick={handleLogout} to='/'>Logout</Link>
            <h1>Hi {localStorage.getItem('username')}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='actions'>My actions:</label>
                <select name='actions' onChange={handleType}>
                    <option value='view'>View my list</option>
                    <option value='add'>Add an item</option>
                    <option value='update'>Modify list</option>
                    <option value='delete'>Delete item</option>
                </select>
                <input type='submit' />
            </form>
            {form && <GiftForm type={type}/>}
        </div>
        </>
    )
}