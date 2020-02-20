import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from '../components/section';
import { Main } from '../components/text';
import Button from '../components/button';
import Link from '../components/betterLink';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 900px;
    margin: 20px auto 20px auto;
`;

const Title = styled(Main)`
    color: #DBC8BE;
    font-size: 26px;
`;

const Background = styled(Section)`
    padding: 20px 0;
`;

const LinkWrapper = styled.div`
    
`;

const GalleryShow = ()=>(
    <StaticQuery 
        query={query}
        render={data=>(
            <Content data={data}/>)}
    />
);

const Content = ({data})=>{
    const files = data.allFile.edges.sort(() => 0.5 - Math.random()).slice(0,6);
    return(
        <Background>
            <Title>Gallery</Title>
            <Wrapper>
                {files.map(({node},index)=>(
                    <Image key={index} fluid={node.childImageSharp.fluid} />
                ))}
            </Wrapper>
            <LinkWrapper>
                <Link to='/gallery'>
                    <Button text='Go to Gallery' contrast margin='25px auto'/>
                </Link>
            </LinkWrapper>
        </Background>
    );
}

export default GalleryShow;

const Image = styled(Img)`
    margin: 5px;
    width: 90px;
    height: 90px;
    ${breakpoint('tablet')`
        margin: 20px;
        width: 160px;
        height: 160px;
    `}
`;

const query = graphql`
  {
    allFile(filter: {sourceInstanceName:{eq: "gallery"}}){
      edges{
        node{
            relativePath
            childImageSharp{
                fluid(maxWidth: 2048){
                    ...GatsbyImageSharpFluid_noBase64
                    aspectRatio
                }
            }
        }
      }
    }
  }
`;