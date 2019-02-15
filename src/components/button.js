import React from 'react';
import styled from 'styled-components';

//need animation;
const StyledButton = styled.button`
    height: 48px;
    width: 130px;
    background-color: rgba(0,0,0,0);
    border-radius: 5px;
    border: 1px solid #232529;
    font-family: Nunito-Light;
    font-size: 15px;
    color: #232529;
    outline: none;
    transition: 0.3s;
    :hover{
        background-color: #232529;
        color: #DAC6BD;
    }
`;

const CustomButton =({text})=>(
    <StyledButton>
        {text} 
    </StyledButton>
);

export default CustomButton;