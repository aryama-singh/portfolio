import React from "react";
import './intro.css';
import { Link } from "react-scroll"


const Intro = () => {
    return (
        
        <section id="intro">
        
            
            <div className="introContent">
                <span className="hello"><b>Hi,</b></span>
                <span className="introText">I'm <span className="introName">Aryama</span><br/>a Java Web developer</span>
                <p className="introPara" ><b>with comprehensive knowledge of designing, developing, and maintaining full-stack web applications.</b> </p>
                <Link activeClass="active" smooth spy to="contactPage"><button className="btn">Get in touch!</button></Link>
            </div>
        </section>
    )
}

export default Intro;