import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FilterNavButton from './FilterNavButton.jsx';

const FilterNav = ( { services, currCategory } ) => {

    const renderButtons = () => {
        return services.categories.map((button, idx) => {
            return <FilterNavButton key={idx} button={button} />
        });
    }

    return (
        <FilterNavStyled className='FilterNav'>
            {renderButtons()}
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    
`;