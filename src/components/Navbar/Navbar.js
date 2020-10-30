import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/Amjad.png';
import resume from '../../images/amjad-hossain-resume.pdf';


const Navbar = () => {
    return (
        <div className=" navbar position-sticky sticky-top shadow mb-5 m-0">
            <nav className="navbar navbar-expand-lg navbar-light container w-100 bg-transparent">
                <Link to="/" className="navbar-brand " ><img style={{width: '150px'}} src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active" >
                            <NavLink activeClassName="active-nav" to="/home" className="nav-link " href="#"><span style={{color:`${window.location.pathname=='/home' ? 'purple' : 'white'}`}}> HOME </span><span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active-nav" className="nav-link amjad " href="#"> <span style={{color:`${window.location.pathname=='/about' ? 'purple' : 'white'}`}}>ABOUT</span> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" activeClassName="active-nav" className="nav-link " href="#"><span style={{color:`${window.location.pathname=='/portfolio' ? 'purple' : 'white'}`}}>PORTFOLIO</span> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active-nav" className="nav-link " href="#"> <span style={{color:`${window.location.pathname=='/contact' ? 'purple' : 'white'}`}}> CONTACT</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" activeClassName="active-nav" className="nav-link " href="#"> <span style={{color:`${window.location.pathname=='/blog' ? 'purple' : 'white'}`}}> BLOG</span></NavLink>
                        </li>                        
                        <li className="nav-item">
                            <NavLink to="/achievement" activeClassName="active-nav" className="nav-link " href="#" ><span style={{color:`${window.location.pathname=='/achievement' ? 'purple' : 'white'}`}}>ACHIEVEMENT</span></NavLink>
                        </li>
                    </ul>                
                    <a href={resume} download>
                        <button className="btn btn-success m-2 my-2 my-sm-0">DOWNLOAD RESUME</button>
                    </a>                   
                </div>
                </nav>
        </div>
    );
};

export default Navbar;