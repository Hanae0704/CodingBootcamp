import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Component ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Welcome :: SPA</title>
            </Helmet>
            <div className="nested-wrapper"><Tabbed/></div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;