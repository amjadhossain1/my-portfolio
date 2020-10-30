import React from 'react';
import imgMain from '../../images/profile.jpg'

const HeaderMain = () => {
    return (
        <section className="main-container">
            <div className="container text-center">
                <img style={{width: '270px', borderRadius: '50%'}} src={imgMain} alt=""/>
                <h2 className="m-3">Hi, I am Amjad</h2>
                <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also <br/> make website more & more interactive with web animations.</p>
            </div>
        </section>
    );
};

export default HeaderMain;