import React, { useState } from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Tab from './Tab.jsx';
import Section from './Section.jsx';

/* Scripts ---------------------------*/
import { tabItems } from './tabItems.js';

const Tabbed = () => {

    const [chosenTab, chosenTabset] = useState(tabItems[1]);

    // console.log('chosenTab', chosenTab);

    const renderTabs = () => {
        return tabItems.map((tabItem, idx) => {
            return <Tab 
            key={ idx } 
            tabItem={ tabItem } 
            chosenTabset={ chosenTabset }
            chosenTab={ chosenTab }
            />;
        });
    }

    return (
        <TabbedStyled className='Tabbed'>
            { renderTabs () }
            <Section chosenTab={ chosenTab }/>
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;