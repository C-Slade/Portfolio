import React from 'react';

const ResponsiveContent = ({project}) => {
    const getResponsiveImages = () => {
        let pc = project.responsive.pc.img;
        let ipad = project.responsive.tablet.img;
        let iphone = project.responsive.iphone.img;

        if (project.responsive.iphone.isCompatible) {
            return (
                <React.Fragment>
                    <img src={pc} alt="" className='pc'/>
                    <img src={ipad} alt="" className='ipad'/>
                    <img src={iphone} alt="" className='iphone'/>
                </React.Fragment>
            )
        } else if (project.responsive.tablet.isCompatible) {
            return (
                <React.Fragment>
                    <img src={pc} alt="" className='pc'/>
                    <img src={ipad} alt="" className='ipad'/>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <img src={pc} alt="" className='pc'/>
                </React.Fragment>
            )
        }
    }

    return (
        <div className="responsive-container">
            {getResponsiveImages()}
        </div>
    )

}

export default ResponsiveContent;