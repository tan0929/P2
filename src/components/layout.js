import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components';
import NunitoLight from '../fonts/Nunito-Light.ttf';
import PlayFairDisplayRegular from '../fonts/PlayfairDisplay-Regular.ttf';

import Header from './header';
import Footer from './footer';

//or body background-color: #232529;
const GlobalStyle = createGlobalStyle`
    body{
        background-color: #DAC6BD;
        margin: auto;
    }
    @font-face {
      font-family: Nunito-Light;
      src: url(${NunitoLight});
    }
    @font-face {
      font-family: PlayFairDisplay-Regular;
      src: url(${PlayFairDisplayRegular});
    }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <>
        <Header 
          siteTitle={data.site.siteMetadata.title}
          siteSubtitle={data.site.siteMetadata.subtitle}
        />
        <div>
          <GlobalStyle />
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
