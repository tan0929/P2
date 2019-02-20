import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import breakpoint from 'styled-components-breakpoint';
import { Main, Secondary } from '../components/text';
import { Media } from 'react-breakpoints';
import Button from '../components/button';

const StyledImg = styled(Img)`
    width: 200px;
`;

const TextWrapper = styled.div`
    box-sizing: border-box;
    max-width: 700px;
    margin: 30px;
`;

const AlignCenter = styled.div`
    box-sizing: border-box;
    width: 70%;
    max-width: 700px;
    text-align: center;
    margin: 0 30px
`;

const AlignRight = styled.div`
    box-sizing: border-box;
    max-width: 700px;
    width: 70%;
    text-align: right;
    margin: 0 30px;
`;

const Intro = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Section backgroundColor='#DAC6BD' padding='60px 0'>
                <StyledImg fluid={data.logo.childImageSharp.fluid} />
                <TextWrapper>
                    <Main color='black' size='16px' lineHeight='2em'>
                        {data.allMarkdownRemark.edges[0].node.excerpt}
                    </Main>
                </TextWrapper>
                <AlignCenter>
                    <Main color='black' size='20px' fontWeight='900' lineHeight='2em'>
                        “ There are no established rules in piping flowers, just pip with your rhythm”.
                    </Main>
                </AlignCenter>
                <AlignRight>
                    <Main color='black' size='20px' fontWeight='900'>
                        Evelyn W.
                    </Main>
                </AlignRight>
                <Button text='Learn More'/>
            </Section>   
        )}
    />
);



export default Intro;

const query = graphql`
  query {
    logo : file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    allMarkdownRemark(filter:{frontmatter:{title :{
        eq: "About Petalimn"
      }}}){
        edges{
          node{
            excerpt(pruneLength: 300)
          }
        }
      }
  }
`;