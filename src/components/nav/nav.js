import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    state = {
        components: [
            {
                name: 'home',
                active: false
            },
            {
                name: 'projects',
                active: false
            },
            {
                name: 'services',
                active: false
            },
            {
                name: 'aboutme',
                active: false
            },
            {
                name: 'contact',
                active: false
            },
        ]
    }
    styles = () => {
        return {
            borderLeft: '5px solid #3E7DFC',
            color: '#3E7DFC'
        }
    }

    componentDidMount = () => {
        this.getCurrentPage()
    }

    getCurrentPage = () => {
        setTimeout(() => {
            const pn = window.location.pathname
            const state = this.state.components;
            if (pn === "/") {
                state.map(c => c.name === "home" ? c.active = true : c.active = false)
                this.setState({components: state})
            } else if (pn === "/projects") {
                state.map(c => c.name === "projects" ? c.active = true : c.active = false)
                this.setState({components: state})
            } else if (pn === "/aboutme") {
                state.map(c => c.name === "aboutme" ? c.active = true : c.active = false)
                this.setState({components: state})
            } else if (pn === "/contact" || pn === "/contact/success") {
                state.map(c => c.name === "contact" ? c.active = true : c.active = false)
                this.setState({components: state})
            }
        }, 50);
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavLink exact to="/" activeClassName="hi" onClick={this.getCurrentPage} className={this.state.components[0].active === true ? "active" : null}>Home</NavLink>
                    <NavLink to="/projects" onClick={this.getCurrentPage} className={this.state.components[1].active === true ? "active" : null} >Projects</NavLink>
                    <NavLink to="/aboutme" onClick={this.getCurrentPage} className={this.state.components[3].active === true ? "active" : null}>About Me</NavLink>
                    <NavLink to="/contact" onClick={this.getCurrentPage} className={this.state.components[4].active === true ? "active" : null}>contact</NavLink>
                </ul>
            </nav>
        )
    }
}
export default Nav;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav} from 'react-bootstrap';

// const Navigation = ({props}) => {
//     return (
//             <nav>
//                 <ul>
//                     <Navbar>
//                         <Nav >
//                             <Nav.Link as={NavLink} href="/" to="/" activeKey='active' exact>Home</Nav.Link>
//                             <Nav.Link as={NavLink} href="/projects" to="/projects" activeKey='active'>Project</Nav.Link>
//                             <Nav.Link as={NavLink} href="/services" to="/services" activeKey='active'>Services</Nav.Link>
//                             <Nav.Link as={NavLink} href="/aboutme" to="/aboutme" activeKey='active'>About Me</Nav.Link>
//                             <Nav.Link as={NavLink} href="/contact" to="/contact" activeKey='active'>contact</Nav.Link>
//                         </Nav>
//                     </Navbar>
//                 </ul>
//             </nav>
//         )
// }

// export default Navigation;


