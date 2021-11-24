import React, { useState, useEffect } from 'react';
import { Gift } from '../index';
import axios from 'axios';
import './style.css';

export const ListContainer = ({user, type, mod}) => {
    const [ gifts, setGifts ] = useState([]);
    const [ userId, setUserId] = useState(0);

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const lowerUser = user.toLowerCase();
                const results = await axios.get(`http://localhost:3000/users/find/${lowerUser}`);
                setUserId(results.data.id);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchUser();
    },[user])

    useEffect(() => {
        const fetchGifts = async() => {
            try {
                const lowerType = type.toLowerCase();
                const results = await axios.get(`http://localhost:3000/present/user/${userId}/${lowerType}`);
                setGifts(results.data);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchGifts();
    },[userId])
    
    const renderGifts = () => 
            gifts.map(
            (g, i) => <Gift key={i} 
                        name={g.present_name} 
                        description={g.present_description}
                        link={g.present_link}
                        price={g.present_price} 
                        priority={g.present_priority}
                        id={g.id}
                        mod={mod}
                    />
            )
    
    const noGifts = () =>  <h1>No wishlist found for username: {user} on occasion: {type}</h1>

    return (
        <div>
            <h1 id='giftTitle'><span className='giftTitleSpan'>Username: </span><span className='giftTitleUser'>{user}</span><span className='giftTitleSpan'>Occasion: </span>{type}</h1>
            <article className="listContainer">
                {gifts.length ? renderGifts() : noGifts()}
            </article>
        </div>
    )
}