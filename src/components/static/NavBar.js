import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {


    return (
        <div className="navbar clearfix">
            <button className="big-button" ><NavLink to ="/" exact>Home</NavLink> </button>
            <button className="big-button"><NavLink to ="/weather" exact>Weather Search</NavLink> </button> 
            <button className="big-button"><NavLink to ="/activities" exact>Activity List</NavLink> </button> 
            <button className="big-button"><NavLink to ="/activities/new" exact>New Activity</NavLink> </button> 
        </div>
    )
}

export default NavBar;