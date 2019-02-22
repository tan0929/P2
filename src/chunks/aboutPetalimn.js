import React from "react"
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from '../components/section';
import breakpoint from 'styled-components-breakpoint';
import { Secondary, Main } from "../components/text";
import Button from '../components/button';

const Container = styled.div`
    width: 100%;
`;

const StyledImg = styled(Img)`
    margin: 40px 20px 60px 20px;
    width: 300px;
    height: 1130px;
    ${breakpoint('tablet')`
        margin: 50px 40px;
        width: 500px;
        height: 700px;
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

const Text = styled(Secondary)`
    padding: 0 30px 30px 30px;
    margin: 0;
`;

const AboutPetalimn = () => (
    <StaticQuery 
        query={query}
        render={data=>(
            <Section backgroundColor='#DAC6BD'>
                <Container>
                    <StyledImg fluid={data.bg.childImageSharp.fluid}/>
                    <Panel>
                        <TitleWrapper>
                            <Title>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</Title>
                        </TitleWrapper>
                        <Text contrast>
                            <span dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}} />
                        </Text>
                        <Button contrast text='Get In Touch' margin='0 0 30px 0'/>
                    </Panel>
                </Container>
            </Section>
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
        eq: "About Petalimn"
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