import React, { useState } from 'react';
import Logo from './img/logo.png';

const Header = () => {

    const showMenu = () => {
        const el = document.getElementById('ul-nav-list');
        el.style.right = 0;
    }

    const hiddenMenu = () => {
        const el = document.getElementById('ul-nav-list');
        el.style.right = '-265px';
    }

    return(
        <React.Fragment>
            <header>
                <div className="container">
                    <nav>
                        <div className="nav-brand">
                            <a href='#0'>
                                <img src={Logo} />
                            </a>
                        </div>
                        <div onClick={showMenu} className="menu-icons open">
                            <i className="icon ion-md-menu" />
                        </div>
                                <ul className="nav-list" id="ul-nav-list">
                                    <div onClick={hiddenMenu} className="menu-icons close">
                                        <i className="icon ion-md-close" />
                                    </div>
                                    <li className="nav-item">
                                        <a href="#0" className="nav-link current">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#0" className="nav-link">Yoga Styles</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#0" className="nav-link">References</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#0" className="nav-link">Adventure</a>
                                    </li>
                                </ul>
                    </nav>
                </div>
            </header>
            
        </React.Fragment>
    )
}
export default Header;