import React, { useState } from "react"
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from "../components/section";
import { Main } from "../components/text";
import { Modal } from "@material-ui/core";

const Title = styled(Main)`
    font-size: 40px;
    color: #DBC8BE;
`;

const Gallery =()=>(
    <StaticQuery 
        query={query}
        render={data=>(<Content data={data}/>)}
    />
)

const Image = styled(Img)`
    margin: 5px;
    width: 80px;
    height: 80px;
    ${breakpoint('tablet')`
        margin: 20px;
        width: 250px;
        height: 250px;
    `}
`;

const LargeImage = styled(Img)`
    width: 100%;
`;

const LargeImageWrapper = styled.div`
    :focus{
        outline: none;
    }
    display: flex;
    align-items: center;
    height: 100%;
`;

const Cell = ({fluid})=>{
    const [enable,setEnable] = useState(false);
    return(
        <div >
            <div onClick={()=> setEnable(true)}>
                <Image fluid={fluid} />
            </div>
            <Modal 
                open={enable}
                onClose={()=>setEnable(false)}
                onClick={()=>setEnable(false)}
            >
                <LargeImageWrapper>
                    <LargeImage fluid={fluid} />
                </LargeImageWrapper>
            </Modal>
        </div> 
    );
};

const CellWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 0 60px 0;
`;

const Content = ({data})=>(
    <div>
        <SEO title="Gallery" keywords={[`petalimn`, `cake`, `design`]} />
        <Section padding='30px 0 0 0'>
            <Title>Gallery</Title>
                <CellWrapper>
                    {data.allFile.edges.map((edge,index)=>(
                        <Cell key={index} fluid={edge.node.childImageSharp.fluid} />
                    ))}
                </CellWrapper>
        </Section>
    </div>
);

export default Gallery;

const query = graphql`
  {
    allFile(filter: {sourceInstanceName:{eq: "gallery"}}){
      edges{
        node{
          childImageSharp{
            fluid(maxWidth: 800){
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;