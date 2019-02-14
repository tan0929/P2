import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

const Image = styled(Img)`
  margin: 20px;
  width: 200px;
  height: 200px;
`;

const Logo = () => (
  <StaticQuery
    query={query}
    render={data => <Image fluid={data.test.childImageSharp.fluid} />}
  />
)

export default Logo;

const query = graphql`
  query {
    test : file(relativePath: { eq: "logoww.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
