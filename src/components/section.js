import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.backgroundColor? props.backgroundColor: '#232529'};
    width: 100%;
    min-height:  400px;
`;

const Section = ({children, backgroundColor}) =>(
    <StyledDiv backgroundColor={backgroundColor}>
        {children}
    </StyledDiv>
);

export default Section;