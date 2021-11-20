import React from 'react';
import { useState } from 'react';
import { ListContainer } from '../index';
import './style.css';

export const SearchForm = () => {
    const [user, setUser] = useState('');
    const [type, setType] = useState('birthday');
    const [formComplete, setFormComplete] = useState(false);

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handleOccasion = (e) => {
        setType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormComplete(true);
    }

    return (
        <>
            {!formComplete ? (
            <form onSubmit={handleSubmit}>
                <label htmlFor='user'>Username</label>
                <input name='user' type='text' onChange={handleUser}/>
                <label htmlFor='type'>Occasion</label>
                <select name='type' onChange={handleOccasion}>
                    <option value='birthday'>Birthday</option>
                    <option value='christmas'>Christmas</option>
                    <option value='other'>Other</option>
                </select>
                <input type='submit'/>
            </form>):(<ListContainer user={user} type={type} />)}
        </>
    )
}