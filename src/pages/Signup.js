import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Signup = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="signup">
                <h1>Inscription</h1>
            </div>
        </div>
    );
};

export default Signup;