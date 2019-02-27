import React from "react"
import SEO from "../components/seo"
import Section from '../components/section'
import styled from 'styled-components';
import { Main, Secondary } from "../components/text";


const Title = styled(Main)`
    font-size: 40px;
`;

const Text = styled(Secondary)`
    font-size: 20px; 
`;

const Background = styled(Section)`
    background-color: #DBC8BE;
`;

const TextWrapper = styled.div`
    max-width: 600px;
    padding: 30px;
`;

const NotFoundPage = () => (
  <Background>
    <SEO title="Thanks" />
    <TextWrapper>
        <Title>Thanks</Title>
        <Text>
            We appreciate that you’ve taken the time to write us. We’ll get back to you very soon. Please come back and see us often.
        </Text>
    </TextWrapper>
  </Background>
)

export default NotFoundPage;