import React from 'react';
import styled from 'styled-components';

import StaffMember from './StaffMember.jsx';
import { staffData } from './staffData.js';

const Staff = () => {

    const renderMembers = () => {
        return staffData.map((member, idk) => {
            return <StaffMember
            key = { idk }
            member = { member }
            />;
        });
    }

    return (
        <StaffStyled className='Staff'>
            Staff 
            <div className="members">
            { renderMembers() }
            </div>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`

    .members {
        display: flex;
        flex-wrap: wrap;
    }
`;