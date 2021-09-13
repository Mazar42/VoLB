import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import  { NavLink } from "react-router-dom"

const Account = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className="account">
                <h1>Mon Compte</h1>
                <p>Pas encore de compte ?
                <NavLink exact to="signup" className="signup-btn">
                Inscrivez-vous !
                </NavLink>
                </p>
            
            </div>
            
        </div>
    );
};

export default Account;