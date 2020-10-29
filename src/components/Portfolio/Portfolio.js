import React from 'react';
import './Portfolio.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Projects from './Projects';


const Portfolio = () => {
    return (
        <section className="bg-secondary">
             <Navbar/>
            <div className="portfolio-container container">
            <Projects/>
            </div>
             <Footer/>
        </section>
    );
};

export default Portfolio;