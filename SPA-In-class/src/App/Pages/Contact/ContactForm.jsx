import React from 'react';
import styled from 'styled-components';

import FormGroup from '../../../common/FormGroup.jsx';

const ContactForm = () => {

    return (
        <ContactFormStyled className='ContactForm'>
            <form>
                <FormGroup id={'userName'} label={'Name'}/>
                <FormGroup id={'userEmail'} label={'Email'}/>
                <FormGroup id={'userMessage'} label={'Message'}/>
                {/* <div className="FormGroup">
                    <label htmlFor="userName">Name: </label>
                    <input id="userName"/>
                </div>
                <div className="FormGroup">
                    <label htmlFor="userEmail">Email: </label>
                    <input id="userEmail"/>
                </div>
                <div className="FormGroup">
                    <label htmlFor="userMessage">Message: </label>
                    <textarea id="userMessage"/>
                </div> */}
            </form>
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;