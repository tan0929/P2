import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { Main } from '../components/text';
import Button from '../components/button';
import Link from '../components/betterLink';

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

const Background = styled(Section)`
  background-color: #DAC6BD;
  padding: 60px 0;
`;

const Intro = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Background>
                <StyledImg fluid={data.logo.childImageSharp.fluid} />
                <TextWrapper>
                <Text>
                    {data.about.edges[0].node.excerpt}
                </Text>
                <Slogan>
                    {data.intro.edges[0].node.frontmatter.slogan}
                </Slogan>
                <Signature>
                    {data.about.edges[0].node.frontmatter.founder}
                </Signature>
                </TextWrapper>
                <Link to='/about'>
                  <Button text='Learn More'/>
                </Link>
            </Background>   
        )}
    />
);



export default Intro;

const query = graphql`
  query {
    logo: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    about: allMarkdownRemark(filter:{frontmatter:{title :{
        eq: "About Petalimn"
    }}}){
      edges{
        node{
          excerpt(pruneLength: 300)
          frontmatter{
            founder
          }
        }
      }
    }
    intro: allMarkdownRemark(filter:{frontmatter:{title :{
      eq: "Meet Evelyn W."
    }}}){
      edges{
        node{
          frontmatter{
            slogan
          }
        }
      }
    }
  }
`;