import React from 'react';
import './header.css';


let Header = () => {
    return (
        <div className="header">
            <div className="header__items">
                <div className="header__logo"><img src="img/Logo.png" alt="Mistake" /></div>
                <div className="header__menu">
                    <div className="header__letter">Social Network</div>
                </div>    
            </div>
        </div>        
    );
}

export default Header;