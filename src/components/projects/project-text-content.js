import React from 'react';

const TextContent = ({project}) => {
    const getProjectInfo = () => {
        return (
            <section className="project-info">
                <div className="block-1">
                    <p>{project.content[0].text}</p>
                    <img src={project.content[0].img} alt=""/>
                </div>
                <div className="block-2">
                    <img src={project.content[1].img} alt=""/>    
                    <p>{project.content[1].text}</p>
                </div>
            </section>
        )
    }

    return (
        <React.Fragment>
            {getProjectInfo()}
        </React.Fragment>
    )

}

export default TextContent;