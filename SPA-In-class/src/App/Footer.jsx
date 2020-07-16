import React from 'react';
import styled from 'styled-components';

import { mg } from '../common/mediaQueries.js';

const Footer = () => {
    
    //How to get variable in JavaScript
    
    /*const myVariable = `LALALA`
    console.log(myVariable);
    
    const function = () =>{
    console.log(`Executing function);
    }
    
    function();*/

    return (
            <FooterStyled>
                <div className='nested-wrapper'>
                    My Footer
                </div></FooterStyled>
    )
}
export default Footer;


const FooterStyled = styled.footer`

text-align: center;
background-color: teal;
padding: 20px;

        @media ${mg.tablet} {
            color: white;
            
        @media ${mg.desktop} {
            color: black;
        }

`;
