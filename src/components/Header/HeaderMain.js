import React from 'react';
import imgMain from '../../images/p.jpg'

const HeaderMain = () => {
    return (
        <section className="main-container">
            <div className="container text-center">
                <img style={{width: '300px', borderRadius: '50%'}} src={imgMain} alt=""/>
                <h2>Hi, I am Amjad Ahmed</h2>
                <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also <br/> make website more & more interactive with web animations.</p>
            </div>
        </section>
    );
};

export default HeaderMain;