import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../chunks/welcome';

const IndexPage = () => (
  <Layout>
    <SEO title="Petalimn" keywords={[`petalimn`, `cake`, `design`]} />
    <Welcome />
  </Layout>
)

export default IndexPage
