import React from "react"
import SEO from "../../components/seo"
import Section from '../../components/section'
import styled from 'styled-components';
import { Main, Secondary } from '../../components/text';
import { StaticQuery, graphql } from "gatsby";
import Card from '../../components/card';
import ReactResizeDetector from 'react-resize-detector';
import breakpoint from 'styled-components-breakpoint';
import Link from '../../components/betterLink';
import _ from 'lodash';

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
    -webkit-tap-highlight-color: transparent;
    ${breakpoint('tablet')`
        display: flex;
        flex-wrap: wrap;
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
                </PageTextWrapper>
                <ClassWrapper>
                    {edges.map(({node},index)=>(
                        <Link key={index} to={`/classes/${_.kebabCase(node.fields.slug)}`}>
                            <Card
                                large={width>bp}
                                title={node.frontmatter.title}
                                subtitle={node.frontmatter.subtitle}
                                fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                            />
                        </Link>
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
                    fields{
                        slug
                    }
                    frontmatter{
                        title
                        subtitle
                        thumbnail{
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

