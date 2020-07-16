import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <Helmet>
                <title>Login :: SPA</title>
            </Helmet>
            Login
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;