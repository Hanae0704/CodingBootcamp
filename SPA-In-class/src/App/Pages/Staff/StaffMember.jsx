import React, {useState} from 'react';
import styled from 'styled-components';

import {mg} from '../../../common/mediaQueries.js';

import Lightbox from '../../../common/Lightbox.jsx';

const StaffMember = ({member}) => {

    const [ showLBox, showLBoxUpdate] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }
    const turnOff = () => {
        showLBoxUpdate(false);
    }

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ member.name } onClick={turnOn}/>
            <div className="title">{ member.name }</div>

            <Lightbox show = {showLBox} hideAction={turnOff} /*width='240'*/>
            <img src={ member.image } alt={ member.name }/>
            <div className ="title">{member.name}</div>
            </Lightbox>

        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    .test { 
            text-align: center; 
            color: teal;

            img {
                display: inline;
                }
            }

    outline: solid 5px white;

    margin: 20px;
    width: 200px;

    @media ${mg.tablet} {
        width: 130px;
    }
    @media ${mg.desktop} {
        width: 200px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    .title {
        background-color: maroon;
        color: white;
        padding: 5px;
    }

    .Lightbox {
        .title {background-color: teal;}
    }
`;