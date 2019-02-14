import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";

const Image = styled(Img)`
    width: 100%;
    height: 400px;
`;

const Welcome = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Section>
                <Image fluid={data.test.childImageSharp.fluid} />
            </Section>   
        )}
    >    
        
    </StaticQuery>

);

export default Welcome;

const query = graphql`
  query {
    test : file(relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;