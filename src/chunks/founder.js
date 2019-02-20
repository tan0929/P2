import React from "react"
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from '../components/section';
import { Secondary, Main } from "../components/text";
import Button from '../components/button';

const StyledImg = styled(Img)`
    border-radius: 150px;
    width: 300px;
    height: 300px;
`;

const Title = ({children})=>(
    <Main color='#DBC8BE' size='40px'>
        {children}
    </Main>
)

const Subtitle = ({children})=>(
    <Main color='#DBC8BE' size='18px'>
        {children}
    </Main>
)

const Content = ({data})=>(
    <Secondary size='16px' color='#DDD' padding='0 30px 30px 30px' margin='0'>
        <span dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}} />
    </Secondary>
);

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 650px;
    padding: 80px 15px 60px 15px;
`;

const Founder = () => (
    <StaticQuery 
        query={query}
        render={data=>(
            <Section backgroundColor='#2A2C30'>
                <Wrapper>
                    <StyledImg fluid={data.portrait.childImageSharp.fluid} />
                    <Title>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</Title>
                    <Subtitle>“ There are no established rules in piping flowers, just pip with your rhythm”.</Subtitle>
                    <Content data={data}/>
                    <Button contrast text='Get In Touch'/>
                </Wrapper>
            </Section>
        )}
    />
)

export default Founder;

const query = graphql`
  query {
    portrait : file(relativePath: { eq: "05.jpg" }) {
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
        eq: "Meet Evelyn W."
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