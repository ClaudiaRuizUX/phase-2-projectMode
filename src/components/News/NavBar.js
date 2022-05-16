import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Finance</NavLink>
            <NavLink to="/crypto">Crypto</NavLink>
            <NavLink to="/regulation">Regulation</NavLink>
        </div>
    );
};

export default NavBar;