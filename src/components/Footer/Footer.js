import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=" footer shadow-lg mt-5">
            <div className="container">
                <div className="">                    
                    <p className="text-center text-light">© {new Date().getFullYear()}
                        <a href="#" target="_blank" rel="noopener noreferrer"> Amjad Ahmed</a>. All rights reserved. Created by
                    <a href="https://www.facebook.com/profile.php?id=100009857807246" target="_blank" rel="noopener noreferrer"> Amjad</a>
                    </p>
                  </div>
            </div>
        </div>
    );
};

export default Footer;