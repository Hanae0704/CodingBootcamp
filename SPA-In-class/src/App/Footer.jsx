import React from 'react';
import styled from 'styled-components';

import { mg } from '../common/mediaQueries.js';

const Footer = () => {
    
    return (
            <FooterStyled>
                <div className='nested-wrapper'>
                    My Footer
                </div></FooterStyled>
    )
}
export default Footer;


const FooterStyled = styled.footer`

background-color: teal;
padding: 20px;

        @media ${mg.tablet} {
            color: pink;
            
        @media ${mg.desktop} {
            color: purple;
        }

`;
