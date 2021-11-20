import React from "react";
import './style.css'

export const Gift = ({name, description, price, link, priority}) => {

    return (
        <section className="giftItem">
            <h2><a href={link}>{name}</a></h2><span className="visible">{priority} priority</span>
            <p>{description}</p>
            <p>{price}</p>
        </section>
    )
}