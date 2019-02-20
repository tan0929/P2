import React from "react"
import styled from 'styled-components';
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from "../components/section";
import breakpoint from 'styled-components-breakpoint';

const Contact =()=>(
    <div>
        <SEO title="Contact" keywords={[`petalimn`, `cake`, `design`]} />
        <Section padding='0'>
            <StaticQuery
                query={query}
                render={data=>(<Content data={data}/>)}
            />
        </Section>
    </div>
);

const StyledImg = styled(Img)`
    width: 100%;
    height: 100px;
    ${breakpoint('tablet')`
        width: 100%;
        height: 600px;
    `}
`;

const ImageWrapper = styled.div`
    width: 100%;
`;

const Content=({data})=>(
    <ImageWrapper>
        <StyledImg fluid={data.image.childImageSharp.fluid} />
    </ImageWrapper>
);


export default Contact;

const query = graphql`
  query {
    image : file(relativePath: { eq: "06.jpg" }) {
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
  }
`;