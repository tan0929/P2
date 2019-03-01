import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import breakpoint from 'styled-components-breakpoint';
import { Main, Secondary } from '../components/text';
import SEO from '../components/seo';
import Button from '../components/button';
import Calendly from '../components/calendly';
import Modal from "@material-ui/core/Modal";
import PreviewCompatibleImage from '../components/previewCompatibleImage';

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
`;

const TitleWrapper = styled.div`
    width: 100%;
    ${breakpoint('tablet')`
        flex-grow: 1;
    `}
`;

const ImgWrapper = styled.div`
    width: 100%;
    height: 300px;
    ${breakpoint('tablet')`
        width: 60%;
        height: inherit;
        padding: 0 0 0 5vw;
    `}
`;

const Title = styled(Main)`
    display: block;
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

const Hint = styled.div`
    padding: 30px 0;
    max-width: 600px;
    margin: auto;
`;

const StyledButton = styled(Button)`
    margin: 20px 40px;
    ${breakpoint('tablet')`
        margin: 20px 80px;
    `}
    display: block;
`;

const BookingButton = ({bookingUrl})=>{
    const [enable,setEnable] = useState(false);
    return(
        <div>
            <StyledButton 
                contrast 
                text="線上預約" 
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
        </div>
    );
}

const CalendlyWrapper = styled.div`
    margin: 110px auto;
    max-width: 1080px
`;

export const ClassTemplate = ({
    preview,
    title,
    subtitle,
    image,
    description,
    bookingUrl,
    keywords,
    body
})=>{
    
    return(
        <Background>
            {/* keywords need to set up from frontmatter */}
            {
                !preview && <SEO title={title} keywords={keywords} />
            }
            <UpperWraper>
                <ImgWrapper>
                    <PreviewCompatibleImage img={image} />
                </ImgWrapper>
                <TitleWrapper>
                    <Title>{title}</Title>
                    <Subtitle contrast>{subtitle}</Subtitle>
                    {description.map((d,index)=>(
                        <Text contrast key={index}>{d}</Text>
                    ))}
                    {
                        preview
                        ?
                        <StyledButton 
                            contrast 
                            text="" 
                        />
                        :
                        <BookingButton bookingUrl={bookingUrl}/>
                    }
                </TitleWrapper>
            </UpperWraper>
            <LowerWrapper>
                <Text contrast>
                    {
                        preview
                        ?
                        body
                        :
                        <span dangerouslySetInnerHTML={{__html: body}} />
                    }
                    <Hint>Please double check the date that you wish to enroll, as there will be non-refundable for cancellations. In the unlikely event that we cancel a class, a full refund will be offered.</Hint>
                </Text>
            </LowerWrapper>
        </Background>
    );
}

const Class = ({data})=>{
    const { title, subtitle, image, description, bookingUrl, keywords } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return(
        <ClassTemplate 
            title={title}
            subtitle={subtitle}
            image={image}
            description={description}
            bookingUrl={bookingUrl}
            keywords={keywords}
            body={html}
        />
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
                keywords
            }
            html
        }
    }
`;