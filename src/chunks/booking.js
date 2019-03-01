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
    margin: 5px 0;
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
                    <Title>線上預約課程</Title>
                    <Subtitle contrast>豆沙花蛋糕</Subtitle>
                    <Subtitle contrast>造型棒棒糖蛋糕</Subtitle>
                    <Subtitle contrast>豆沙花杯子蛋糕</Subtitle>
                    <Space />
                    <Text contrast>上課地點</Text>
                    <Text contrast>美國南加州橘郡</Text>
                    <Text contrast margin='0'>Orange County, California</Text>
                    <Link to='/classes'>
                        <Button text='了解更多' contrast margin='50px auto'/>
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