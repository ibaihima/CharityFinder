import React from 'react';
import NavBar from './NavBar.js';

function Header() {
    return (
    <header> 
        <img className="header_img" src="https://cdn.shopify.com/s/files/1/0246/5542/9666/files/charity_header.png?v=1565249421" alt="Charity" />
        <h2 className="title"> Charity Finder </h2>
        <h3 className="subtitle"> CharityFinder allows you to search for reputable charities by your preferred category, giving you a brief description about them and also letting you save them to your personal list. Website also shows ratings for each charity, as determined by Charity Navigator.</h3>
    </header>
    )
}

export default Header;