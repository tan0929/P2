
import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    ${props=>props.display ? `display: ${props.display};` : '' }
    ${props=>props.padding ? `padding: ${props.padding};` : '' }
    ${props=>props.margin ? `margin: ${props.margin};` : '' }
    ${props=>props.fontFamily ? `font-family: ${props.fontFamily};` : '' }
    ${props=>props.color ? `color: ${props.color};` : '' }
    ${props=>props.size ? `font-size: ${props.size};` : '' }
    ${props=>props.weight ? `font-weight: ${props.weight};` : '' }
    ${({lineHeight})=>lineHeight? `line-height: ${lineHeight};`: ''}
`;

const Main = ({children, color, size, weight, display, padding, margin, ...props})=>(
    <Text 
        fontFamily='PlayfairDisplay-Regular'
        display={ display? display: 'inline-block'}
        padding={ padding? padding: null }
        margin={ margin? margin: null }
        color={ color? color: '#DDD'}
        size={ size? size: '22px'}
        weight={ weight? weight: '200'}
        {...props}
    >
        {children}
    </Text>
);

const Secondary = ({children, color, size, weight, display, padding, margin, ...props})=>(
    <Text 
        fontFamily='Nunito-Light'
        display={ display? display: 'inline-block' }
        padding={ padding? padding: null }
        margin={ margin? margin: null }
        color={ color? color: '#DDD' }
        size={ size? size: '16px' }
        weight={ weight? weight: '200' }
        {...props}
    >
        {children}
    </Text>
);


export {Main, Secondary};
