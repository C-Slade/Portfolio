import React from 'react';

const textChunk = ({chunk}) => {
    return (
        <div className="textChunk">
            <p>{chunk.text}</p>
            <div className="img" style={{backgroundImage: `url(${chunk.img})`}}></div>
        </div>
    )
};

export default textChunk;