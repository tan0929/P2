import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Main } from './text';



const Title = styled(Main)`

`;

const Subtitle = styled(Main)`

`;

const SmallImg= styled(Img)`
    width: 120px;
    height: 100px;
`;

const SmallWrapper = styled.div`
    width: 300px;
    height: 100px;
`;

const Small = ({title, subtitle, fluid})=>{
    return(
        <SmallWrapper>
            {title}{subtitle}
            <SmallImg fluid={fluid}/>
        </SmallWrapper>
    );
}

const LargeWrapper = styled.div`
    width: 300px;
    height: 180px;
`;

const Large = ({title, subtitle, fluid})=>{
    return(
        <LargeWrapper>
            LargeTest
            <Img fluid={fluid}/>
        </LargeWrapper>
    );
}



const Card =({large, ...props})=>(
    large ? <Large {...props}/> : <Small {...props}/>            
)

export default Card;