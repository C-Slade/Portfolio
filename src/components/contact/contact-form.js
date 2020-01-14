import React from 'react';

const Form = () => {
    return (
        <React.Fragment>
            <h1>Contact Me</h1>
            <form action='https://formspree.io/xpzqpona' method='POST' className="contact-form">
                <div className="name">
                    <input type="text" name="name" placeholder='First Name'/>
                    <input type="text" name="name" placeholder='Last Name'/>
                </div>
                <input type="email" name="_replyto" className="email" placeholder='Email'/>
                <input type="hidden" name="_next" value="/"/>
                <textarea className="message" placeholder="Your Message" name="message"></textarea>
                <input type="submit" value="Send" className="submit"/>
            </form>
        </React.Fragment>
    )
}

export default Form;