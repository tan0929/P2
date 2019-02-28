import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Main } from './text';

const SmallTitle = styled(Main)`
    font-size: 16px;
    color: #DBC8BE;
    margin: 5px 15px;
`;

const SmallSubtitle = styled(Main)`
    font-size: 16px;
    margin: 5px 15px;
`;

const SmallTextWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #232529;
    width: 180px;
    height: 100px;
`;

const SmallImg= styled(Img)`
    width: 120px;
    height: 100px;
`;

const SmallWrapper = styled.div`
    padding: 5px;
    display: flex;
    width: 300px;
    height: 100px;
    -webkit-tap-highlight-color: transparent;
`;

const Small = ({title, subtitle, fluid})=>{
    return(
        <SmallWrapper>
            <SmallImg fluid={fluid}/>
            <SmallTextWrapper>
                <SmallTitle>{title}</SmallTitle>
                <SmallSubtitle contrast>{subtitle}</SmallSubtitle>
            </SmallTextWrapper>
        </SmallWrapper>
    );
}

const LargeTitle = styled(Main)`
    font-size: 22px;
    color: #DBC8BE;
    margin: 5px 15px;
`;

const LargeSubtitle = styled(Main)`
    font-size: 22px;
    margin: 5px 15px;
`;

const LargeTextWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #232529;
    width: 300px;
    height: 220px;
`;

const LargeImg= styled(Img)`
    width: 300px;
    height: 180px;
`;

const LargeWrapper = styled.div`
    padding: 15px;
    width: 300px;
    height: 400px;   
    -webkit-tap-highlight-color: transparent;
`;

const Large = ({title, subtitle, fluid})=>{
    return(
        <LargeWrapper>
            <LargeImg fluid={fluid}/>
            <LargeTextWrapper>
                <LargeTitle>{title}</LargeTitle>
                <LargeSubtitle contrast>{subtitle}</LargeSubtitle>
            </LargeTextWrapper>
        </LargeWrapper>
    );
}

const Card =({large, ...props})=>(
    large ? <Large {...props}/> : <Small {...props}/>            
)

export default Card;