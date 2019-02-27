import React from "react"
import SEO from "../components/seo"
import Section from '../components/section'
import styled from 'styled-components';


const Background = styled(Section)`
    background-color: #DBC8BE;
`;

const NotFoundPage = () => (
  <Background>
    <SEO title="Thanks" />
    <h1>Thanks</h1>
    <p>We appreciate that you’ve taken the time to write us. We’ll get back to you very soon. Please come back and see us often.</p>
  </Background>
)

export default NotFoundPage;