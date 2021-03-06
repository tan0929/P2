import React from "react"
import styled from 'styled-components';
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import AboutPetalimn from '../chunks/aboutPetalimn';
import Founder from '../chunks/founder';

const Banner = styled(Img)`
    width: 100%;
    height: 200px;
`;

const Page = styled.div`
    width: 100%;
`;

const AboutPage = () => (
    <div>
        <SEO title="About" keywords={[`petalimn`, `cake`, `design`]} />
        <StaticQuery 
            query={query}
            render={data=>(
                <Page>
                    <Banner fluid={data.banner.childImageSharp.fluid}/>
                    <AboutPetalimn />
                    <Founder />
                </Page>
            )}
        />
    </div>
);
  
export default AboutPage;
  
const query = graphql`
  query {
    banner: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
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
  }
`;