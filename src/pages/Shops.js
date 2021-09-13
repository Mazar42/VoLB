import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Shops = () => {
    return (
        <div>
             <Logo/>
            <Navigation/>
            <div className="shops">
                <h1>Nos magasins partenaires</h1>
            </div>
        </div>
    );
};

export default Shops;