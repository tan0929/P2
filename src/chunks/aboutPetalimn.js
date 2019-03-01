import React from "react"
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from '../components/section';
import breakpoint from 'styled-components-breakpoint';
import { Main, HtmlTextWrapper } from "../components/text";
import Button from '../components/button';
import Link from '../components/betterLink';
import HtmlReactParser from 'html-react-parser';

const Container = styled.div`
    width: 100%;
`;

const StyledImg = styled(Img)`
    margin: 40px 20px 60px 20px;
    width: 300px;
    height: 1300px;
    ${breakpoint('tablet')`
        margin: 50px 40px;
        width: 500px;
        height: 800px;
    `}
`;

const Panel = styled.div`
    position: absolute;
    background-color: rgba(35,37,41,0.9);
    width: 280px;
    right: 20px;
    top: 60px;
    ${breakpoint('tablet')`
        width: 600px;
        right: 40px;
        top: 90px;
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrapper = styled.div`
    text-align: center;
    margin: auto;
`;

const Title = styled(Main)`
    color: #DBC8BE;
    padding: 30px 0 0 0;
`;

const Text = styled(HtmlTextWrapper)`
    padding: 0 30px 30px 30px;
    margin: 0;
    line-height: 1.6em;
`;

const Background = styled(Section)`
    background-color: #DBC8BE;
`;

const AboutPetalimn = () => (
    <StaticQuery 
        query={query}
        render={data=>(
            <Background>
                <Container>
                    <StyledImg fluid={data.bg.childImageSharp.fluid}/>
                    <Panel>
                        <TitleWrapper>
                            <Title>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</Title>
                        </TitleWrapper>
                        <Text contrast>
                            {HtmlReactParser(data.allMarkdownRemark.edges[0].node.html)}
                        </Text>
                        <Link to='/contact'>
                            <Button contrast text='與我聯繫' margin='0 0 30px 0'/>
                        </Link>
                    </Panel>
                </Container>
            </Background>
        )}
    />
)

export default AboutPetalimn;

const query = graphql`
  query {
    bg: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site{
        siteMetadata{
            title
            slogan
        }
    }
    allMarkdownRemark(filter:{frontmatter:{title :{
        eq: "關於 Petalimn"
      }}}){
      edges{
        node{
          html
          frontmatter{
              title
          }
        }
      }
    }
  }
`;