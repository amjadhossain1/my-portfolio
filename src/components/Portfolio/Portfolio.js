import React from 'react';
import './Portfolio.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Projects from './Projects';
import creativeAgency from '../../images/project/creative-agency.png'

// const projectData = [
//     {
//         title: 'Creative Agency',
//         image: creativeAgency,
//         description: 'Creative Agency',
//         github: 'https://github.com/',
//         live: 'https://creative-agency-689ba.web.app/'

//     },
//     {
//         title: 'Creative Agency',
//         image: creativeAgency,
//         description: 'Creative Agency',
//         github: 'https://github.com/',
//         live: 'https://github.com/'

//     },
    
// ]

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