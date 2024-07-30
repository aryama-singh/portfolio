import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import Menu from '../../assets/menu.jpg';

import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu]= useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" /> 
            <div className="desktopMenu">
                
                <Link activeClass="active" smooth spy to="intro" offset={-100} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" smooth spy to="skills" className="desktopMenuListItem">About</Link>
                <Link activeClass="active" smooth spy to="work" className="desktopMenuListItem">Work</Link>
                <Link activeClass="active" smooth spy to="contactPage" className="desktopMenuListItem">Contact</Link>
                
            </div>
            
            <img src={Menu} alt="Menu" className="mobMenu" onClick={()=> setShowMenu(!showMenu)}/> 
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                
                <Link activeClass="active" smooth spy to="intro" offset={-100} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" smooth spy to="skills" className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" smooth spy to="work" className="ListItem" onClick={()=>setShowMenu(false)}>Work</Link>
                <Link activeClass="active" smooth spy to="contactPage" className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
                
            </div>

        </nav>
    )
}

export default Navbar;