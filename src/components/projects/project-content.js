
// Food Tracker Images
import ft_desk from '../../images/ft-desktop.png';
import ft_ipad from '../../images/ft-tablet.png';
import ft_iphone from '../../images/ft-smartphone.png';
import ft_pic1 from '../../images/ft-xd.jpg';
import ft_pic2 from '../../images/ft-code.png';

// MHMP Images
import MHMP_desk from '../../images/MHMP-desktop.png';
import MHMP_ipad from '../../images/MHMP-tablet.png';
import MHMP_iphone from '../../images/MHMP-smartphone.png';
import MHMP_pic1 from '../../images/MHMP-xd.jpg';
import MHMP_pic2 from '../../images/MHMP-code.png';

// HomeApp Images
import HomeApp_desk from '../../images/HomeApp-desktop.png';
import HomeApp_pic1 from '../../images/HomeApp-xd.jpg';
import HomeApp_pic2 from '../../images/HomeApp-code.jpg';


const projects = {
    projects: [
        {
            name: 'Food Tracker',
            responsive: {
                pc: {
                    isCompatible: true,
                    img: ft_desk
                },
                tablet: {
                    isCompatible: true,
                    img: ft_ipad
                },
                iphone: {
                    isCompatible: true,
                    img: ft_iphone
                },
            },
            content: [
                {
                    text: 'The dietary app was designed with a “mobile first approach” as interface occurs mostly on hand-held devices. It records daily nutrient intake, helps visualize dietary goals, all while tracking progress in achieving them.',
                    img: ft_pic1,
                },
                {
                    text: 'The app, built with React, allows for clean and easy future additions. local storage, which is what mimics the feel of a database, stores your previous days and nutrients. This approach allows end users quick and ready access to previous days dietary information.',
                    img: ft_pic2
                },
            ],
            gitHub: 'https://github.com/C-Slade/Food-Tracker',
            liveDemo: 'http://claytonslade.com/food-tracker/',
            index: 0
        },
        {
            name: 'Maritime Helicopters Maintenance Portal',
            responsive: {
                pc: {
                    isCompatible: true,
                    img: MHMP_desk
                },
                tablet: {
                    isCompatible: true,
                    img: MHMP_ipad
                },
                iphone: {
                    isCompatible: true,
                    img: MHMP_iphone
                },
            },
            content: [
                {
                    text: 'This app displays structured presentation of multiple pdf documents. Designed to be very responsive on all devices such as PC, Tablet or Mobil, it’s presented in 6 different data sections to achieve fast, organized access to technical documents.',
                    img: MHMP_pic1
                },
                {
                    text: 'App was built with just JavaScript, not requiring any libraries, although the TweenMax library was used to help with animations. JavaScripts ES6 classes was chosen to keep site organized and scalable while still providing easy addition/modification in local PDF documents folder.',
                    img: MHMP_pic2
                },
            ],
            index: 1
        },
        {
            name: 'Home App',
            responsive: {
                pc: {
                    isCompatible: true,
                    img: HomeApp_desk
                },
                tablet: {
                    isCompatible: false,
                    img: null
                },
                iphone: {
                    isCompatible: false,
                    img: null
                },
            },
            content: [
                {
                    text: 'The app was designed to be both visually appealing plus act as a modifiable home page for desktop browsers. Although currently limited to desktops, future designs will work on mobile devices while still remain visually dynamic.',
                    img: HomeApp_pic1
                },
                {
                    text: 'Due to size of app, jQuery was choice of build offering multiple options rather than using multiple libraries. App uses two API’s for your geolocation and local weather plus allows creation of customizable links that are all stored in local storage',
                    img: HomeApp_pic2
                },
            ],
            gitHub: 'https://github.com/C-Slade/Home-App',
            liveDemo: 'http://rotor-app.com/Home-App/',
            index: 2
        },
    ]
}

export default projects;