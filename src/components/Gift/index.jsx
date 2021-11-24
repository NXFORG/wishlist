import React, { useState, useEffect } from "react";
import './style.css'

export const Gift = ({name, description, price, link, priority, id, mod}) => {
    const [del, setDelete] = useState(false)

    const handleClick = () => {
        setDelete(true)
    }
    
    useEffect(() => {
        if(del){
            const deleteGift = async() => {
                try {
                    await fetch(`https://ca-xmas-api.herokuapp.com/present/${id}`,{
                        method: "DELETE",
                        headers: {
                            'Authorization': localStorage.getItem('token')
                        }
                    });
                } catch(err) {
                    console.log(err);
                }
            } 
            deleteGift();
        }
    },[del])

    return (
        <section className="giftItem">
            <h2><a href={`//${link}`} target='_blank'>{name}</a></h2><span className="visible">{priority} priority</span>
            {mod && <button className='giftDelete' onClick={handleClick}>Delete</button>}
            <p>{description}</p>
            <p>{price}</p>
        </section>
    )
}