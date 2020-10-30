import React from 'react';
import './About.css'
import myImg from '../../images/profile2.jpg';
import resume from '../../images/amjad-hossain-resume.pdf'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section  className="bg-secondary ">
            <Navbar/>
            <div className="container about-container text-light">
                <div className="row m-5 p-3">
                    <div className="col-md-6 mb-5">
                            <img className="img-fluid p-2" style={{width: '100%', borderRadius: '20px'}} src={myImg} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3"> Hi, I am Amjad Hossain</h2>
                        <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                      <div className="row ">
                          <div className="col-md-3 col-sm-5 col-5">
                            <p><b> Full Name </b></p>
                            <p><b> Age </b>      </p>
                            <p><b>Nationality</b></p>
                            <p><b>Languages </b></p>
                            <p><b>Address </b>   </p>
                            
                            <p><b>E-mail </b>    </p>
                          </div>
                          <div className="col-md-8 col-sm-5 col6">
                            <p> : Amjad Hossain</p>
                            <p> : 22 Years</p>
                            <p> : Bangladeshi</p>
                            <p> : Bengali, English</p>
                            <p> : Feni, Chittagong, Bangladesh</p>
                            <p> : amjad.rabby1@gmail.com</p>                           
                          </div>                         
                        
                      </div>                       
                        <a href={resume} download>
                            <button className="btn btn-success mt-4 my-2 my-sm-0">DOWNLOAD RESUME</button>
                        </a>                        
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default About;