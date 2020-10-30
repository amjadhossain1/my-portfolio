import React from 'react';
import './Contact.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section className="bg-secondary">
                <Navbar/>
            <div className="portfolio-container">               
                <ContactForm/>               
            </div>
                <Footer/>
        </section>
    );
};

export default Contact;