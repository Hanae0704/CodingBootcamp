import React from 'react';
import styled from 'styled-components';

import {mg} from '../../../common/mediaQueries.js';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ member.name }/>
            <div className="title">{ member.name }</div>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

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
`;