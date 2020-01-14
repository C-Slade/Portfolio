import React from 'react';

const Connect = ({project}) => {
    const getLinks = () => {
        if (project.liveDemo && project.gitHub) {
            return (
                <div className="connect">
                    <a href={project.gitHub} rel="noopener noreferrer" target="_Blank">GitHub</a>
                    <a href={project.liveDemo} rel="noopener noreferrer" target="_Blank">Live Demo</a>
                </div>
            )
        } else if (project.liveDemo) {
            return (
                <div className="connect">
                    <a href={project.liveDemo} rel="noopener noreferrer" target="_Blank">Live Demo</a>
                </div>
            )
        } else if (project.gitHub) {
            return (
                <div className="connect">
                    <a href={project.gitHub} rel="noopener noreferrer" target="_Blank">GitHub</a>
                </div>
            )
        } else {
            return (
                <div className="connect">
                    <a href="!#" rel="noopener noreferrer">Not displayed do to NDA</a>
                </div>
            )
        }
    }
    return (
        <React.Fragment>
            {getLinks()}
        </React.Fragment>
    )
}

export default Connect;