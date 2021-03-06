import React, { useState, useEffect } from 'react';
import './style.css';

export const AddContainer = () => {
    const [ userId, setUserId] = useState(0);
    const [ success, setSuccess] = useState(false);

    const [addValues, setAddValues] = useState(
        {
            giftName:'', 
            giftDesc:'', 
            giftPrice:'', 
            giftLink:'',
            giftPriority:'high',
            giftOcc:'all'
        }
    );

    const handleAddInput = (e) => {
        setAddValues((prevState) => ({...prevState, [e.target.name]:e.target.value}));
    }

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const lowerUser = localStorage.getItem('username').toLowerCase();
                const results = await fetch(`https://ca-xmas-api.herokuapp.com/users/find/${lowerUser}`);
                const resultsJson = await results.json();
                setUserId(resultsJson.id);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchUser();
    },[addValues])

    const createGift = async() => {
        try {
            const results = await fetch(`https://ca-xmas-api.herokuapp.com/present/`, {
                method: "POST",
                body: JSON.stringify(
                    {
                        user_id: userId, 
                        present_name: addValues.giftName,
                        present_description: addValues.giftDesc,
                        present_price: addValues.giftPrice,
                        present_link: addValues.giftLink,
                        present_priority: addValues.giftPriority,
                        present_occasion: addValues.giftOcc.toLowerCase()
                    }
                ),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': localStorage.getItem('token')
                }
            });
            console.log(addValues);
            console.log(results);
            setSuccess(true);
        } catch(err) {
            console.log(err);
        }
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        createGift();
        e.target.reset();
    }

    return (
        <>
            <form id='addForm' onSubmit={handleSubmit}>
                <label htmlFor='gitfName'>Gift Name</label>
                <input type='text' name='giftName' onChange={handleAddInput}/>
                <label htmlFor='gitfDesc'>Gift Description</label>
                <input type='text' name='giftDesc' onChange={handleAddInput}/>
                <label htmlFor='gitfPrice'>Gift Price</label>
                <input type='text' name='giftPrice' onChange={handleAddInput}/>
                <label htmlFor='gitfLink'>Gift Link</label>
                <input type='text' name='giftLink' onChange={handleAddInput}/>
                <label htmlFor='gitfPriority'>Gift Priority</label>
                <select name='giftPriority' onChange={handleAddInput}>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
                <label htmlFor='gitfOcc'>Gift Occasion</label>
                {/* <input type='text' name='giftOcc' onChange={handleAddInput}/> */}
                <select name='giftOcc' onChange={handleAddInput}>
                    <option value='birthday'>Birthday</option>
                    <option value='christmas'>Christmas</option>
                    <option value='other'>Other</option>
                </select>
                <input type='submit' />
                {success && <p id='addSuccessMessage'>Item added to your list.</p>}
            </form>
        </>
    )
}