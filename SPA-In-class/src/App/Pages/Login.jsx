import React, {useState} from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Script ---------------------------*/
import API from '../../common/axios.js';

/* Component ---------------------------*/
import FormGroup from '../../common/Forms/FormGroup.jsx';
import Button from '../../common/Forms/Button.jsx';

const formFields = {
    usernameField: {
        id: 'userName',
        label: 'Username',
        inputType: 'username',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    passwordField: {
        id: 'userPassword',
        label: 'Password',
        inputType: 'password',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
}

const Login = () => {

    const[userName, userNameUpdate] = useState(formFields.usernameField);
    const[userPassword, userPasswordUpdate] = useState(formFields.passwordField);

    const handleOnChange = (event, formField) => {
        //console.log(event.target.value, formField);

        const newField = {
            ...formField,
            value: event.target.value,
        }

        if (newField.validate.required === true) {
            // console.log('Validating: ', newField.label);

            if (newField.value.length < 1) {
                newField.validate.valid = false;
                newField.validate.message = `You forgot to fill out the ${newField.label} field.`;
            }
            else {
                newField.validate.valid = true;
                newField.validate.message = ``;
            }
        }

        if (formField.id === 'userName'){
            userNameUpdate(newField);
        }
        if (formField.id === 'userPassword'){
            userPasswordUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log ('CAPTURED HELLO');

        if (userName.validate === true && userPassword.validate.valid === true) {
            console.log ('VALID');
        }
            // ..AJAX goes here AKA AXIOS
        const postData = {
            userName: userName,
            userPassword: userPassword,
        }

        API.post('/sendLogin', postData).then((result) => {
            console.log('result', result);
        });
    } 
    

return (
    <LoginStyled className='Login'>
        <Helmet>
        <title>Home :: Blue Pooch</title>
        </Helmet>
        <form onSubmit={ handleFormSubmit }>
            <FormGroup 
                formField={ userName }     
                onChange={ handleOnChange } />
            <FormGroup 
                formField={ userPassword }    
                onChange={ handleOnChange } />
            <Button type='submit'>Login</Button>
        </form>
    </LoginStyled>
);
}

export default Login;

const LoginStyled = styled.div`
    
`;