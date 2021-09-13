import React from 'react';
import  { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="shops" activeClassName="nav-active">
                Boutiques
            </NavLink>
            <NavLink exact to="account" activeClassName="nav-active">
                Mon compte
            </NavLink>
        </div>
    );
};

export default Navigation;