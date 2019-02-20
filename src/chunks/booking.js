import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { Main, Secondary } from '../components/text';
import Button from '../components/button';

const StyledImg = styled(Img)`
    width: 100%;
    height: 520px;
`;

const AbsolutePanel = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
`;

const Title = ({children})=>(
    <Main size='26px' color='#DAC6BD' padding='80px 0 0 0' margin='40px 0'>
        {children}
    </Main>
)

const Subtitle = ({children})=>(
    <Main size='18px' margin='5px 0'>
        {children}
    </Main>
)


const Booking = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Section>
                <StyledImg fluid={data.bg.childImageSharp.fluid} />
                <AbsolutePanel>
                    <Title>Online Booking Classes</Title>
                    <Subtitle>Bean Paste Flower Cake</Subtitle>
                    <Subtitle>Popsicle Cake pops</Subtitle>
                    <Secondary>IN</Secondary>
                    <Secondary margin='0'>Orange County, California</Secondary>
                    <Button text='Learn More' contrast margin='50px auto'/>
                </AbsolutePanel>
            </Section>   
        )}
    />
);



export default Booking;

const query = graphql`
  query {
    bg : file(relativePath: { eq: "03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;