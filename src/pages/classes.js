import React from "react"
import SEO from "../components/seo"
import Section from '../components/section'
import styled from 'styled-components';
import { Main, Secondary } from '../components/text';
import { StaticQuery, graphql } from "gatsby";
import Card from '../components/card';
import ReactResizeDetector from 'react-resize-detector';
import breakpoint from 'styled-components-breakpoint';
import { TableFooter } from "@material-ui/core";

const Background = styled(Section)`
    background-color: #DBC8BE;
    padding: 30px 0 60px 0;;
`;

const Title = styled(Main)`
    font-size: 30px;
`;

const Subtitle = styled(Main)`
    max-width: 600px;
    font-size: 20px;
    line-height: 2em;
`;

const Text = styled(Secondary)`
    max-width: 700px;
`;

const Classes = ()=>(
    <StaticQuery 
        query={query}
        render={data=><Content data={data} />}
    />
);

const ClassWrapper = styled.div`
    ${breakpoint('tablet')`
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;

const PageTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;

const bp = 768;

const Content = ({data}) => {
    const {title : pageTitle , subtitle : pageSubtitle, text: pageText} = data.classesIntro.edges[0].node.frontmatter;
    const edges = data.class.edges;
    return (
        <ReactResizeDetector handleWidth>{(width)=>(
            <Background>
                <PageTextWrapper>
                    <Title>{pageTitle}</Title>
                    <Subtitle>{pageSubtitle}</Subtitle>
                    {pageText.map((t,index)=>
                        <Text key={index}>{t}</Text>
                    )}
                </PageTextWrapper>{console.log(edges)}
                <ClassWrapper>
                    {edges.map(({node},index)=>(
                        <Card
                            large={width>bp}
                            key={index}
                            title={node.frontmatter.title}
                            subtitle={node.frontmatter.subtitle}
                            fluid={node.frontmatter.coverImage.childImageSharp.fluid}
                        />
                    ))}
                </ClassWrapper>
            </Background>
        )}</ReactResizeDetector>
    )
}

export default Classes;

const query = graphql`
    query{
        classesIntro:
        allMarkdownRemark(
            filter:{frontmatter:{title :{ eq: "Classes"}}}){
            edges{
                node{
                    frontmatter{
                        title
                        subtitle
                        text
                    }
                }
            }
        }
        class:
        allMarkdownRemark(
            filter:{ frontmatter:{ type:{ eq: "class"}}}){
            edges{
                node{
                    frontmatter{
                        title
                        subtitle
                        coverImage{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

