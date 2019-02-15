import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 48px;
    width: 130px;
    background-color: rgba(0,0,0,0);
    border-radius: 5px;
    border: 1px solid ${({contrast})=>contrast? `#DAC6BD` : `#232529`};
    font-family: Nunito-Light;
    font-size: 15px;
    color: ${({contrast})=>contrast? `#DAC6BD` : `#232529`};
    outline: none;
    transition: 0.3s;
    :hover{
        background-color: ${({contrast})=>contrast? `#DAC6BD` : `#232529`};
        color: ${({contrast})=>contrast? `#232529` : `#DAC6BD`};
    }
    ${({margin})=> margin? `margin: ${margin}` : ``}
`;

const CustomButton =({text, contrast, ...props})=>(
    <StyledButton contrast={contrast} {...props}>
        {text} 
    </StyledButton>
);

export default CustomButton;