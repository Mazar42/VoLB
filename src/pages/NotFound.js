import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const NotFound = () => {
    return (
        <div className="not-found">
            <Logo/>
            <Navigation/>
            <h1>Erreur 404</h1>
            <p>Oups ! Cette page n'existe pas.</p>
        </div>
    );
};

export default NotFound;