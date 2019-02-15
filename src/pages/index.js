import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../chunks/welcome';
import Intro from '../chunks/intro';
import Booking from '../chunks/booking';
import GetInTouch from '../chunks/getintouch';
import Form from '../components/form';

const IndexPage = () => (
  <Layout>
    <SEO title="Petalimn" keywords={[`petalimn`, `cake`, `design`]} />
    <Welcome />
    <Intro />
    <Booking />
    <GetInTouch />
  </Layout>
)

export default IndexPage;
