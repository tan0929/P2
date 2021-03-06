import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GlobalStyle from './globalStyle';
import Header from './header';
import Footer from './footer';

//need to fix the reactbreakpoints warning
const Layout = ({ children }) => (
  <div>
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
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
