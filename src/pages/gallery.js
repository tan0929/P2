import React, { useState } from "react"
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from "../components/section";
import { Main } from "../components/text";
import Modal from "@material-ui/core/Modal";

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
    cursor: pointer;
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
    height: 92vh;
    width: 92vw;
    max-width: calc( 92vh * ${({ratio})=>ratio} );
    max-height: calc( 92vw / ${({ratio})=>ratio} );
    cursor: pointer;
    margin: auto;
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
        <div>
            <div onClick={()=> setEnable(true)}>
                <Image fluid={fluid} />
            </div>
            <Modal 
                open={enable}
                onClose={()=>setEnable(false)}
                onClick={()=>setEnable(false)}
            >
                <LargeImageWrapper>
                    <LargeImage fluid={fluid} ratio={fluid.aspectRatio}/>
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

const Background = styled(Section)`
    padding: 30px 0 0 0;
`;

const Content = ({data})=>{
    const files = data.allFile.edges.sort((lhs,rhs)=>{
        return lhs.node.relativePath.localeCompare(rhs.node.relativePath);
    });
    console.log(files);
    return(
        <div>
            <SEO title="Gallery" keywords={[`petalimn`, `cake`, `design`]} />
            <Background>
                <Title>作品集</Title>
                    <CellWrapper>
                        {files.map(({node},index)=>(
                            <Cell key={index} fluid={node.childImageSharp.fluid} />
                        ))}
                    </CellWrapper>
            </Background>
        </div>
    );
}

export default Gallery;

const query = graphql`
  {
    allFile(filter: {sourceInstanceName:{eq: "gallery"}}){
      edges{
        node{
            relativePath
            childImageSharp{
                fluid(maxWidth: 2048){
                    ...GatsbyImageSharpFluid_noBase64
                    aspectRatio
                }
            }
        }
      }
    }
  }
`;