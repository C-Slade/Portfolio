import React from 'react';
import Form from './contact-form';
import SuccessfulForm from './contact-success';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Contact extends React.Component {

    state = {
        redirect: false
    }

    setRedirect = () => {
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 1);
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/contact/success' />
        }
    }
    // added a reload function to allow the nav bar to know it's on contact page to activate color
    reload = () => {
        setTimeout(() => {
            window.location.reload()
        }, 1);
    }

    render() {
        return (
            <Router>
               {this.renderRedirect()}
                <div className="contact">
                    <Route exact path="/contact" component={props => <Form redirect={this.setRedirect}/>}/>
                    <Route exact path="/contact/success" component={props => <SuccessfulForm reload={this.reload}/>}/>
                </div>
            </Router>
        )
    }
}

export default Contact;