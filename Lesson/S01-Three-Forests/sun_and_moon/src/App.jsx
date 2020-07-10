// These are importing libraries
import React, { useState } from 'react';

// Importing my custom component
import SunAndMoon from './SunAndMoon.jsx';
import Trinity from './Trinity.jsx';
import ButtomUp from './ButtomUp.jsx';
import ButtomDown from './ButtomDown.jsx';


// Create a component
const App = () => {

    const [whichImage, whichImageSet] = useState("/images/moon.png");

    const handleUp = () => {
        whichImageSet("/images/moon.png");
    }

    const handleDown = () => {
        whichImageSet("/images/sun.png");
    }

    return (

    <div>
        My App has changed
        <SunAndMoon whichImage = { whichImage }/>

        <ButtomDown onClick={ handleDown }/>
        <ButtomUp onClick={ handleUp }/>

        <Trinity/>
    </div>
    );
}

// Export that component to share
export default App;
