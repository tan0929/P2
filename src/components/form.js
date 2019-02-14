import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin: 30px;
    border: none;
    border-bottom: 2px solid white;
    background-color: rgb(0,0,0,0);
    color: white;
    :focus{
        outline: none;
    }
`;

const Form = ()=>(
    <StyledInput>

    </StyledInput>
);

export default Form;