import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../chunks/welcome';
import Form from '../components/form';

const IndexPage = () => (
  <Layout>
    <SEO title="Petalimn" keywords={[`petalimn`, `cake`, `design`]} />
    <Welcome />
    <Form />
  </Layout>
)

export default IndexPage;
