import React from 'react';
import Carousel from './carousel';
import TextContent from './aboutme-text-content';

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <Carousel />
            <TextContent />
        </div>
    )
}

export default AboutMe;