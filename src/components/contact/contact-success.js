import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactSuccess = ({reload}) => {
    return (
        <div className="contact-success">
            <h2>Thank you for your submission</h2>
            <NavLink to="/contact" onClick={reload}>Back to Contact</NavLink>
        </div>
    )
}

export default ContactSuccess;