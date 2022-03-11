import React from 'react';
import NavBar from './NavBar.js';

function Header() {
    return (
    <header> 
        <img className="header_img" src="https://cdn.shopify.com/s/files/1/0246/5542/9666/files/charity_header.png?v=1565249421" alt="Charity" />
        <h2 className="title"> Charity Finder </h2>
        <h3 className="subtitle"> An easier way to create impact!</h3>
    </header>
    )
}

export default Header;