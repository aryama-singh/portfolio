import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail=(e)=> {
        e.preventDefault();
        emailjs.sendForm('service_bh33ipe','template_hlanbjf', form.current, {publicKey:'He8qnZB_fK00RPiKB'})
        .then((result)=>{
            console.log(result.text);
            e.target.reset();
            alert("Email sent!");
        },(error)=>{
            console.log(error.text);
        });

    };
    return(
        <section id="contactPage">
            <h1 className="contactPageTitle">Get in touch!</h1>
            <span className="contactDesc">Fill out the details and let's connect.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your name" name="your_name"/>
                <input type="email" className="email" placeholder="Your email" name="your_email"/>
                <textarea className="msg" name="message" rows={5} placeholder="Your message"></textarea>
                <button type="submit" className="submitBtn">Submit</button>
                
            </form>
        </section>
    );
}

export default Contact;