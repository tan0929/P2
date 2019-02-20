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

const InstagramShow = ()=>(
    <Section backgroundColor='#26282d' padding='30px 0'>
        <Main color='#DBC8BE' size='26px'>Instagram</Main>
        <Wrapper>
            <SnapWidget />
        </Wrapper>
    </Section>
);

export default InstagramShow;