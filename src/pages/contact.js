import React from "react"
import styled from 'styled-components';
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import breakpoint from 'styled-components-breakpoint';
import Form from '../components/form'
import { Main, Secondary } from "../components/text";
import EmailLink from '../components/emailLink';

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
    display: block;
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
            <Title>獨一無二的蛋糕只為你</Title>
            <Text contrast>嗨</Text>
            <Text contrast>很高興見到你，非常謝謝來我們的網站。</Text>
            <Text contrast>如果有任何關於課程，海外活動，特殊活動或各種合作事宜等，請不要害羞的與我聯繫，可以填寫以下表格後寄出或者直接email。非常期待你的來信，我們會儘快回覆！</Text>
            <Text contrast>{data.site.siteMetadata.location}</Text>
            <EmailLink>
                <Text contrast>{data.site.siteMetadata.email}</Text>
            </EmailLink>
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
            location
            email
        }
    }
  }
`;