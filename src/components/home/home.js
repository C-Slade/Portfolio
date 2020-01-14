import React from 'react';
import imgOne from '../../images/home-1.jpg';
import imgTwo from '../../images/home-2.jpg';
import imgThree from '../../images/mountains.png';
import imgFour from '../../images/green-aurora.jpg'
import Github from '../../images/github.svg';
import Sun from '../../images/sun.svg';
import { ReactSVG } from 'react-svg';

const Home = () => {
    return (
        <div className="home">
            <a href="https://github.com/C-Slade" rel="noopener noreferrer" target="_Blank" className="github-tab">
                <ReactSVG src={Github} className="mobile-github"/>
            </a>
            <div className="home-top">
                <h1>Front-end Developer</h1>
                <div className="img-container">
                    <img src={imgOne} alt="" className='img-1'/>
                    <img src={imgTwo} alt="" className='img-2'/>
                </div>
                <div className="sun">
                    <a href="https://github.com/C-Slade" rel="noopener noreferrer" target="_Blank">
                        <ReactSVG src={Github} className="github-svg"/>
                        <ReactSVG src={Sun} className="sun-svg"/>
                    </a>
                </div>
            </div>
            <img src={imgThree} alt="" className='img-3' style={{'opacity': '75%'}}/>
            <div className="home-bottom">
                <p>My name is Clayton, based out of stunning Homer Alaska! I specialize in Front-End Web Development creating user interfaces that are both friendly & responsive.</p>
                <img src={imgFour} alt="" className='img-4'/>
            </div>
        </div>
    )
}

export default Home;