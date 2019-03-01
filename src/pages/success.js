import React from "react"
import SEO from "../components/seo"
import Section from '../components/section'
import styled from 'styled-components';
import { Main, Secondary } from "../components/text";


const Title = styled(Main)`
    display: block;
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
        <Title>謝謝</Title>
        <Text>
            感謝您的來信，我們會儘快回复。請記得經常回來看看。
        </Text>
    </TextWrapper>
  </Background>
)

export default NotFoundPage;