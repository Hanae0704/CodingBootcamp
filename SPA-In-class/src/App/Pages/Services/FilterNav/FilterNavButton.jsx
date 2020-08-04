import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({name, currCategory, currCategorySet}) => {

    // console.log('FilterNavBottom currcategory', currCategory);

    const changeCategory = () => {
        currCategorySet(name);
    }
    const theClassName = (name === currCategory) ? 'FilterNavButton active': 'FilterNavButton';


    return (
        <FilterNavButtonStyled 
        className={ theClassName }
        onClick={ changeCategory }>

            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    display: inline-block;
    padding: 10px 20px;
    background-color: teal; 
    color: white;
    margin: 10px;
    border-radius: 5px;

    cursor: pointer;

    &:hover {
        background-color: #103534;
    }

    &.active {
        background-color: maroon;
    }
`;