import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import breakpoint from 'styled-components-breakpoint';
import { Main, Secondary } from '../components/text';
import SEO from '../components/seo';
import Button from '../components/button';
import Calendly from '../components/calendly';
import Modal from "@material-ui/core/Modal";

//TODO need to connect button with calendly

const Background = styled.div`
    background-color: #232529;
    padding: 0 0 60px 0;
    ${breakpoint('tablet')`
        padding: 60px 0;
    `}
`;

const UpperWraper = styled.div`
    width: 100%;
    ${breakpoint('tablet')`
        display: flex;
        align-items: stretch;
    `}
`;

const LowerWrapper = styled.div`
    h3 {
        color: #DBC8BE;
        font-family: PlayfairDisplay-Regular;
        font-size: 22px;
        font-weight: 200;
    }
    ul {

    }
`;

const TitleWrapper = styled.div`
    width: 100%;
    ${breakpoint('tablet')`
        flex-grow: 1;
    `}
`;

const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
`;

const ImgWrapper = styled.div`
    width: 100%;
    height: 100px;
    ${breakpoint('tablet')`
        width: 60%;
        height: inherit;
        padding: 0 0 0 5vw;
    `}
`;

const Title = styled(Main)`
    flex: 1;
    font-size: 30px;
    color: #DBC8BE;
    margin: 20px 40px;
    ${breakpoint('tablet')`
        margin: 20px 80px;
    `}
`;

const Subtitle = styled(Main)`
    font-size: 26px;
    margin: 10px 40px;
    ${breakpoint('tablet')`
        margin: 20px 80px;
    `}
`;

const Text = styled(Secondary)`
    font-size: 16px;
    margin: 20px 40px;
    line-height: 2em;
    ${breakpoint('tablet')`
        margin: 20px 80px;
    `}
`;

const BookingButton = styled(Button)`
    margin: 20px 40px;
    ${breakpoint('tablet')`
        margin: 20px 80px;
    `}
    display: block;
`;

const CalendlyWrapper = styled.div`
    margin: 110px auto;
    max-width: 1080px
`;

const Class = ({data})=>{
    const { title, subtitle, image, description, bookingUrl } = data.markdownRemark.frontmatter;
    const { fluid } = image.childImageSharp;
    const { html } = data.markdownRemark;
    const [enable,setEnable] = useState(false);
    return(
        <Background>
            {/* keywords need to set up from frontmatter */}
            <SEO title={title} keywords={[`petalimn`, `cake`, `design`]} />
            <UpperWraper>
                <ImgWrapper>
                    <StyledImg fluid={fluid} />
                </ImgWrapper>
                <TitleWrapper>
                    <Title>{title}</Title>
                    <Subtitle contrast>{subtitle}</Subtitle>
                    {description.map((d,index)=>(
                        <Text contrast key={index}>{d}</Text>
                    ))}
                    <BookingButton 
                        contrast 
                        text="Booking" 
                        onClick={()=>setEnable(true)}
                    /> 
                    <Modal
                        open={enable}
                        onClose={()=>setEnable(false)}
                    >
                        <CalendlyWrapper>
                            <Calendly url={bookingUrl} />
                        </CalendlyWrapper>
                    </Modal>
                </TitleWrapper>
            </UpperWraper>
            <LowerWrapper>
                <Text contrast>
                    <span dangerouslySetInnerHTML={{__html: html}} />
                </Text>
            </LowerWrapper>
        </Background>
    );
}

export default Class;

export const query=graphql`
    query postByID($id : String!){
        markdownRemark(id: { eq: $id }){
            frontmatter{
                image{
                    childImageSharp{
                        fluid(maxWidth: 600){
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                title
                subtitle
                description
                bookingUrl
            }
            html
        }
    }
`;