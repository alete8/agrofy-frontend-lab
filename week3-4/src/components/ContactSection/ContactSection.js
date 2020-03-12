import React from 'react';
import './ContactSection.css';
import Button from '../Button/Button';

const ContactSection = () => {
    return <section id="contact" className="contact_container">
                <h2>Contact us</h2>
                <div className="contact_box">
                    <form action="" method="POST">
                        <input type="text" placeholder="Name" className="contact_textbox"></input>
                        <input type="text" placeholder="Email Adress" className="contact_textbox"></input>
                        <input type="text" placeholder="Subject" className="contact_textbox"></input>
                        <textarea placeholder="Message" className="contact_textarea"></textarea>
                        <Button type="submit" className="btn-primary" label="Send"/>
                    </form>
                </div>
            </section>
}

export default ContactSection;