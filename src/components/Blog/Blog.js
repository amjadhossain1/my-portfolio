import React from 'react';
import './Blog.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blog = () => {
    return (
        <section className="bg-secondary">
                <Navbar/>
                <div className="portfolio-container text-center text-light mt-5 pt-5">
                    <h1>Blog Coming soon......</h1>
                </div>
                <Footer/>
        </section>
    );
};

export default Blog;