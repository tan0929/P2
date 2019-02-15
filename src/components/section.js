import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    user-select: none;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.backgroundColor? props.backgroundColor: '#232529'};
    width: 100%;
    min-height:  400px;
    ${({padding})=>padding? `padding: ${padding}` : ``}
    ${({height})=>height? `height: ${height}` : ``}
`;

const Section = ({children, backgroundColor, padding, height}) =>(
    <StyledDiv backgroundColor={backgroundColor} padding={padding} height={height}>
        {children}
    </StyledDiv>
);

export default Section;