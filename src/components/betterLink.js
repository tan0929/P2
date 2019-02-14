import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';

const NoDecoLink = styled(Link)`
  color: ${({color})=>color? color: 'black'};
  text-decoration: none;
  ${props=>props.padding ? `padding: ${props.padding}`: ''}
  ${props=>props.margin ? `margin: ${props.margin}`: ''}
`;

const NoDecoA = styled.a`
  color: ${({color})=>color? color: '#DDD'};
  text-decoration: none;
  ${props=>props.padding ? `padding: ${props.padding}`: ''}
  ${props=>props.margin ? `margin: ${props.margin}`: ''}
`;

const BetterLink = ({to, blank, children, ...props})=>{
    if(to && to.startsWith('http')){
        return(
            <NoDecoA href={to} target={blank? '_blank' : ''} {...props}>
                {children}
            </NoDecoA>
        )
    }else{
        return(
            <NoDecoLink to={to} {...props}>
                {children}
            </NoDecoLink>
        );
    }
}

export default BetterLink;