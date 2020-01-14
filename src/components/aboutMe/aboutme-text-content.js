import React from 'react';
import aboutmeContent from './aboutme-text';
import TextChunk from './aboutme-text-chunk';
import uuid from 'uuid';

const textContent = () => {
    return (
        <div className="aboutMe-text-content">
            {/* <p className="main-text">{aboutmeContent.mainText}</p> */}
            {aboutmeContent.subText.map(chunk => <TextChunk chunk={chunk} key={uuid.v4()}/>)}
        </div>
    )
}

export default textContent;