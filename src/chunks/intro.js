import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { Main } from '../components/text';
import Button from '../components/button';

const StyledImg = styled(Img)`
    width: 200px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 700px;
    margin: 30px 40px 40px 40px;
`;

const Text = styled(Main)`
    align-self: center;
    font-size: 20px;
    line-height: 2em;
    margin: 20px 0;
`;

const Slogan = styled(Main)`
    align-self: center;
    margin: 20px 30px;
    font-size: 22px;
    font-weight: 900px;
    line-height: 2em;
`;
const Signature = styled(Main)`
    align-self: flex-end;
    margin: 0 30px;
    font-size: 22px;
    font-weight: 900px;
`;

const Intro = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Section backgroundColor='#DAC6BD' padding='60px 0'>
                <StyledImg fluid={data.logo.childImageSharp.fluid} />
                <TextWrapper>
                <Text>
                    {data.allMarkdownRemark.edges[0].node.excerpt}
                </Text>
                <Slogan>
                    “ There are no established rules in piping flowers, just pip with your rhythm”.
                </Slogan>
                <Signature>
                    Evelyn W.
                </Signature>
                </TextWrapper>
                <Button text='Learn More'/>
            </Section>   
        )}
    />
);



export default Intro;

const query = graphql`
  query {
    logo: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "logo.png" }) {
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