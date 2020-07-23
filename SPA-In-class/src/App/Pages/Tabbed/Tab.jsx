import React from 'react';
import styled from 'styled-components';

const Tab = ({tabItem, chosenTabset, chosenTab}) => {

    const handleClick = () => {
        chosenTabset(tabItem);
    }

    const theClassName = (tabItem.title === chosenTab.title) ? 'Tab active':'Tab';

    return (
        <TabStyled 
        className= { theClassName }
        onClick={ handleClick }>

            { tabItem.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`

    display: inline-block;

    width: 100px;
    line-height: 50px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;

    margin-right: 10px;

    background-color: #116565;

    &.active {
        background-color: teal;
    }

`;