import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { mg } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        // console.log("You clicked the hamburger", showMenu);
        showMenuSet(!showMenu);
    }

    useEffect(()=> {
        // console.log("I Have mounted");

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width: 499px)`);
            // console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }
        
        handleWindowSizeChange();

        window.addEventListener(`resize`, handleWindowSizeChange);

        return () => {
            window.removeEventListener(`resize`, handleWindowSizeChange);
        }
        
    }, []);

return (
<NavStyled> 
    <div className='nested-wrapper'>
        <div className="hamburger"
             onClick={ toggleMenu }
        >
            <FontAwesomeIcon icon={ faBars } />
        </div>
        {
            showMenu&&
        
        <div className="links">
            <NavLink to="/"exact>Welcome</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
        }
    </div>
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    color: white;

    text-align: center;

    .hamburger {
        position: absolute;
        right: 20px;
        top: 20px;

        cursor: pointer;

        svg {
        color: white;
        width: 40px;
        height: auto;
        }

        display: block;

        @media ${mg.tablet} {
            display: none;
        }
    }

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

        &.active {
            background-color: maroon;
        }
    }
`;
