import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../chunks/welcome';
import Intro from '../chunks/intro';
import Booking from '../chunks/booking';
import Form from '../components/form';

const IndexPage = () => (
  <Layout>
    <SEO title="Petalimn" keywords={[`petalimn`, `cake`, `design`]} />
    <Welcome />
    <Intro />
    <Booking />
  </Layout>
)

export default IndexPage;
