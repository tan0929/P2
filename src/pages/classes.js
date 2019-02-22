import React from "react"
import SEO from "../components/seo"
import Section from '../components/section'
import styled from 'styled-components';
import { Main, Secondary } from '../components/text';
import { StaticQuery, graphql } from "gatsby";

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

const Content = ({data}) => {
    const {title, subtitle, text} = data.classes.edges[0].node.frontmatter;
    return (
        <Background>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {text.map((t,index)=>
                <Text key={index}>{t}</Text>
            )}
        </Background>
    )
}

export default Classes;

const query = graphql`
    query{
        classes : allMarkdownRemark(filter:{frontmatter:{title :{
            eq: "Classes"
        }}}){
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
    }
`;
