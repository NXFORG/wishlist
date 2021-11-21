import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav>
            <span id='navTitle'>Wishlist</span>
            <span><Link id='navLink' to='/login'>Login</Link></span>
        </nav>
    )
}