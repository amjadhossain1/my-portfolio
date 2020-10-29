import React from 'react';
import './About.css'
import myImg from '../../images/p.jpg'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <section  className="bg-secondary ">
            <Navbar/>
            <div className="container about-container text-light">
                <div className="row m-5">
                    <div className="col-md-6">
                            <img src={myImg} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3"> Hi, I am Amjad Hossain</h2>

                        <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                        
                      <div className="row">
                          <div className="col-md-4">
                            <p><b> Full Name </b></p>
                            <p><b> Age </b>      </p>
                            <p><b>Nationality</b></p>
                            <p><b> Languages </b></p>
                            <p><b>Address </b>   </p>
                            <p><b>E-mail </b>    </p>
                          </div>
                          <div className="col-md-6">
                            <p> : Amjad Hossain</p>
                            <p> : 22 Years</p>
                            <p> : Bangladeshi</p>
                            <p> : Bengali, English</p>
                            <p> : Dhaka, Bangladesh</p>
                            <p> : amjad.rabby1@gmail.com</p>
                          </div>
                      </div>                       

                        <button className="btn btn-success my-2 my-sm-0">DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default About;