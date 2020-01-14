import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Projects from './projects/projects';
import AboutMe from './aboutMe/aboutMe';
import Contact from './contact/contact';
import { withRouter } from "react-router";
import Nav from './nav/nav';
import './app.scss';

const Navigation = withRouter(Nav);

class App extends React.Component {
  render() {
    return (
      <Router> 
        <div className="app-container">
          <Navigation />
              <div className="content-container">
              <Switch>
                <Route exact path="/" component={props => <Home update={this.update} history={props}/>}/>
                <Route path="/projects" component={props => <Projects update={this.update} history={props}/>}/>
                <Route path="/aboutme" component={props => <AboutMe update={this.update} history={props}/>}/>
                <Route path="/contact" component={props => <Contact update={this.update} ActivateMoveToContact={this.ActivateMoveToContact} history={props}/>}/>
              </Switch>
              </div>
        </div>
      </Router>
    )
  }
}

export default App;