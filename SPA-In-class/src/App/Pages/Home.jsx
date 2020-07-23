import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Component ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Welcome :: SPA</title>
            </Helmet>
            <div className="nested-wrapper">
                <Tabbed/>
                </div>
            <div className="nested-wrapper">
                <Staff/>
                </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;