import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navLog">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/logowanie">Zaloguj</NavLink>
            <NavLink to="/wylogowano">Wyloguj</NavLink>
            <NavLink to="/rejestracja">Załóż konto</NavLink>
        </nav>
        </div>
    );
};

export default Navigation;