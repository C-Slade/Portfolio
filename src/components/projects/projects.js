import React from 'react';
import projects from './project-content';
import ProjectHeader from './project-header';
import ProjectTextContent from './project-text-content';
import ProjectResponsiveContent from './project-responsive-content';
import ProjectConnect from './project-connect'

class Projects extends React.Component {
    state = {
        project: projects.projects[0]
    };

    displayedProject = (index) => {
        const numOfProjects = projects.projects.length;
        
        if (index === -1) {
            return
        } else if (projects.projects[numOfProjects - 1].index + 1 === index) {
            return
        } else {
            this.setState(prevState => ({
                project: projects.projects[index]
            }))
        }
    }

    render() {
        return (
            <div className="projects">
                <ProjectHeader project={this.state.project} changeProject={this.displayedProject}/>
                <div className="project-content">
                    <ProjectResponsiveContent project={this.state.project}/>
                    <ProjectTextContent project={this.state.project}/>
                    <ProjectConnect project={this.state.project}/>
                </div>
            </div>
        )
    }
}

export default Projects;