import React, { useState } from "react";
import { ListContainer } from "..";
import { AddContainer } from "../AddContainer";
import './style.css';

export const GiftForm = ({type}) => {
    const [form, setForm] = useState(false);

    const [occasion, setOccasion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm(true);
    }

    const handleTypeInput = (e) => {
        setOccasion(e.target.value);
        setForm(false);
    }

    return (
        <>
            {type === 'add' || type === 'update' ? (
                <AddContainer />
            ):(
                <>
                    <form id='occasionSelectForm' onSubmit={handleSubmit}>
                        <label htmlFor='occasion'>Wishlist occasion</label>
                        <input type='text' name='occasion' onChange={handleTypeInput}/>
                        <input type='submit' />
                    </form>
                    {form && <ListContainer user={localStorage.getItem('username')} type={occasion}/>}
                </>
            )}
        </>
    )
}