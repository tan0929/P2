import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GlobalStyle from './globalStyle';
import ReactBreakpoints from 'react-breakpoints';

import Header from './header';
import Footer from './footer';

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}


//need to fix the reactbreakpoints warning
const Layout = ({ children }) => (
  <ReactBreakpoints breakpoints={breakpoints}>
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
          <Header 
            siteTitle={data.site.siteMetadata.title}
            siteSubtitle={data.site.siteMetadata.subtitle}
          />
      )}
    />
    <div>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </div>
  </ReactBreakpoints>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
