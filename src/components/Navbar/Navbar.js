import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className=" navbar position-sticky sticky-top shadow mb-5">
            <nav className="navbar navbar-expand-lg navbar-light container w-100 bg-transparent">
                <Link to="/" className="navbar-brand text-light" >AMJAD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ml-5">
                        <li className="nav-item active" >
                            <Link to="/home" className="nav-link " href="#"><span style={{color:`${window.location.pathname=='/home' ? 'purple' : 'white'}`}}> HOME </span><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about"className="nav-link " href="#"> <span style={{color:`${window.location.pathname=='/about' ? 'purple' : 'white'}`}}>ABOUT</span> </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link " href="#"><span style={{color:`${window.location.pathname=='/portfolio' ? 'purple' : 'white'}`}}>PORTFOLIO</span> </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link " href="#"> <span style={{color:`${window.location.pathname=='/contact' ? 'purple' : 'white'}`}}> CONTACT</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link " href="#"> <span style={{color:`${window.location.pathname=='/blog' ? 'purple' : 'white'}`}}> BLOG</span></Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to="/achievement" className="nav-link " href="#" ><span style={{color:`${window.location.pathname=='/achievement' ? 'purple' : 'white'}`}}>ACHIEVEMENT</span></Link>
                        </li>
                    </ul>                  
                    
                    <button className="btn btn-success my-2 my-sm-0" type="submit">DOWNLOAD CV</button>
                   
                </div>
                </nav>
        </div>
    );
};

export default Navbar;