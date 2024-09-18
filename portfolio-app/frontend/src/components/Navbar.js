// src/components/Navbar.js

import React from 'react';
// import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">MyApp</div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;
