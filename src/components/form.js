import React from 'react';
import styled from 'styled-components';
import Input, { Textarea } from '../components/input';
import Button from '../components/button';

const StyledButton = styled(Button)`
    margin: 40px auto;
    display: block;
`;

const StyledForm = styled.form`
    margin: auto;
    width: 80%;
`;

const BFInput = styled.input`
    display: none;
`;

const Form = ()=>{
    return(
        <StyledForm 
            name="contact" 
            method="post" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            action='/success'
        >
            <input type="hidden" name="form-name" value="contact" />
            <BFInput name="bot-field" />
            <Input type='text' label='Name' name='name' required/>
            <Input type='email' label='Email' name='email' required />
            <Input type='text' label='Subject' name='subject' required />
            <Textarea cols='50' rows='5' label='Message' maxLength='255' name='message' required />
            <StyledButton contrast text='Submit' type='submit'/>
        </StyledForm>
    );
}

export default Form;

// const isEmail = email=> (
//     /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email )
// );
// const emailErrorMessage = 'Please enter a valid email address.';
// const changeEmailErrorMessage = (event)=>{
//     event.target.setCustomValidity(isEmail(event.target.value) ? '' : emailErrorMessage);
// }