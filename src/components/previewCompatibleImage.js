import React from 'react';
import styled from 'styled-components';
import GatsbyImg from 'gatsby-image';

const StyledGatsbyImg = styled(GatsbyImg)`
    width: 100%;
    height: 100%;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`;

const PreviewCompatibleImage = ({img})=>{
    
    if(!!img.childImageSharp){
        const { fluid } = img.childImageSharp;
        return <StyledGatsbyImg fluid={fluid} />;
    }

    if(typeof img === 'string'){
        return <StyledImg src={img} alt=''/>
    }
    
}

export default PreviewCompatibleImage;