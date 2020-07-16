import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { mg } from '../common/mediaQueries.js';

const Nav = () => {

return (
<NavStyled> 
    <div className='nested-wrapper'>
        <NavLink to="/"exact>Welcome</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    color: white;

    text-align: center;

    a {
        display: inline-block;

        text-align: center;
        
        font-size: 20px;
        background-color: #105050;
        color: white;

        text-decoration: none;

        margin-bottom: 10px;

        width: 100%;
       
        border-radius: 5px;

        line-height: 40px;

        @media ${mg.tablet} {
            width: 100px;
            line-height: 50px;
            margin: 0px 10px 0px 10px;
            
        @media ${mg.desktop} {
            width: 150px;
        }

        &:hover {
            background-color: #103534;
        }

        &:active {
            background-color: pink;
        }
    }
`;