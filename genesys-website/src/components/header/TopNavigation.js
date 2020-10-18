import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TopNavigation = () => {
    // menu toggle
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <header class="bg-white flex row align-center header navbar">
            <div class="flex col-8 align-center" id="nav-mobile">
                <span className="logo">
                    <img class="img-logo" src={require('../../assets/genesys_logo.png')} alt="Genesys logo" />
                </span>
                <div className={`${isActive ? "menu-toggle" : "is-active"} menu-toggle`} id="mobile-menu" onClick={handleToggle}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul className={`${isActive ? "top-nav" : "mobile-nav"} flex top-nav`}>
                    <li class="space-between-medium"><Link to="/Learnable">LEARNABLE</Link></li>
                    <li class="space-between-medium"><Link to="/">AGORA</Link></li>
                    <li class="space-between-medium"><Link to="/">STARTZONE</Link></li>
                    <li class="space-between-medium"><Link to="/">ABOUT</Link></li>
                    <li class="space-between-medium"><Link to="/">CONTACT</Link></li>
                </ul>
            </div>
            <div class="flex col-4 align-center flex-end" id="devstudio-box">
                <p class="space-between-medium">build a product with</p>
                <p class="btn">DEVSTUDIO</p>
            </div>
        </header>
    )
};

export default TopNavigation;