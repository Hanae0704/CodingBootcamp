import React from 'react';

const ButtomUp = ({onClick}) => {
    return (
        <img onClick={ onClick } src="/images/up.png" alt="Up"/>
    );
}

export default ButtomUp;