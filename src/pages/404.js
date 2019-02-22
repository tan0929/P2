import React from "react"
import SEO from "../components/seo"
import Section from '../components/section'
import styled from 'styled-components';


const Background = styled(Section)`
    background-color: #DBC8BE;
`;

const NotFoundPage = () => (
  <Background>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Background>
)

export default NotFoundPage;
