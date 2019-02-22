import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import SnapWidget from '../components/snapWidget';
import { Main } from '../components/text';

const Wrapper = styled.div`
    width: 80%;
    max-width: 900px;
    margin: 20px auto 20px auto;
`;

const Title = styled(Main)`
    color: #DBC8BE;
    font-size: 26px;
`;

const InstagramShow = ()=>(
    <Section backgroundColor='#26282d' padding='30px 0'>
        <Title>Instagram</Title>
        <Wrapper>
            <SnapWidget />
        </Wrapper>
    </Section>
);

export default InstagramShow;