import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <button><NavLink to ="/" exact>Home</NavLink> </button>
            <button><NavLink to ="/weather" exact>Weather Search</NavLink> </button>
        </div>
    )
}

export default NavBar;