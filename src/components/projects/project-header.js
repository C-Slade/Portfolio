import React from 'react';

const Header = ({project, changeProject}) => {
    const viewNextProject = () => {
        changeProject(project.index + 1)
    }
    const viewPrevProject = () => {
        changeProject(project.index - 1)
    }
    return (
        <div className="header">
            <h1>{`${project.name}`}</h1>
            <div className="controls">
                <i className="material-icons" onClick={viewPrevProject}>arrow_back</i>
                <i className="material-icons" onClick={viewNextProject}>arrow_forward</i>
            </div>
        </div>
    )
}

export default Header;