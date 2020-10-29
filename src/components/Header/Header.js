import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HeaderMain from './HeaderMain';
import './Header.css';


const Header = () => {
    return (
        <div className="bg-secondary text-light">
            <Navbar/>
            <HeaderMain/>
            <Footer/>
        </div>
    );
};

export default Header;