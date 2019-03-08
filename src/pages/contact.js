import React from "react"
import styled from 'styled-components';
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import breakpoint from 'styled-components-breakpoint';
import Form from '../components/form'
import { Main, Secondary } from "../components/text";

const Background = styled.div`
    background-color: #232529;
    padding: 0 0 60px 0;
    ${breakpoint('tablet')`
        padding: 60px 0;
    `}
`;

const Container = styled.div`
    width: 100%;
    ${breakpoint('tablet')`
        display: flex;
        align-items: stretch;
    `}
`;

const FormWrapper = styled.div`
    width: 100%;
    ${breakpoint('tablet')`
        flex-grow: 1;
    `}
`;

const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
`;

const ImgWrapper = styled.div`
    width: 100%;
    height: 100px;
    ${breakpoint('tablet')`
        width: 60%;
        height: inherit;
        padding: 0 0 0 5vw;
    `}
`;

const Title = styled(Main)`
    display: block;
    font-size: 40px;
    color: #DBC8BE;
    margin: 20px 40px;
    ${breakpoint('tablet')`
        margin: 20px 80px;
    `}
`;

const Text = styled(Secondary)`
    font-size: 18px;
    margin: 20px 40px;
    ${breakpoint('tablet')`
        margin: 20px 80px;
    `}
`;

const Content=({data})=>(
    <Container>
        <ImgWrapper>
            <StyledImg fluid={data.image.childImageSharp.fluid} />
        </ImgWrapper>
        <FormWrapper>
            <Title>One of a kind cakes just for you.</Title>
            <Text contrast>Hi there,</Text>
            <Text contrast>We are glad to see you here. Thanks for visiting. If you have any questions for classes, international workshops, special events, or any ideas you would like to share with us, please feel free to fill out the form below or contact us directly via e-mailI. We would love to hear from you.</Text>
            <Form/>
        </FormWrapper>
    </Container>
);

const Contact =()=>(
    <Background>
        <SEO title="Contact" keywords={[`petalimn`, `cake`, `design`]} />
        <StaticQuery
            query={query}
            render={data=>(<Content data={data}/>)}
        />
    </Background>
);

export default Contact;

const query = graphql`
  query {
    image : file(relativePath: { eq: "06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site{
        siteMetadata{
            title
        }
    }
  }
`;