import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { Main, Secondary } from '../components/text';
import Button from '../components/button';
import Link from '../components/betterLink';

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

const Title = styled(Main)`
    font-size: 26px;
    color: #DBC8BE;
    padding: 80px 0 0 0;
    margin: 40px 0;
`;

const Subtitle = styled(Main)`
    font-size: 18px;
    margin: 5px 0;
`;

const Text = styled(Secondary)`
    margin: 0;
`;

const Space = styled.div`
    width: 100%;
    height: 20px;
`;


const Booking = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Section>
                <StyledImg fluid={data.bg.childImageSharp.fluid} />
                <AbsolutePanel>
                    <Title>Online Booking Classes</Title>
                    <Subtitle contrast>Bean Paste Flower Cake</Subtitle>
                    <Subtitle contrast>Popsicle Cake pops</Subtitle>
                    <Space />
                    <Text contrast>IN</Text>
                    <Text contrast margin='0'>Orange County, California</Text>
                    <Link to='/classes'>
                        <Button text='Learn More' contrast margin='50px auto'/>
                    </Link>
                </AbsolutePanel>
            </Section>   
        )}
    />
);



export default Booking;

const query = graphql`
  query {
    bg: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;