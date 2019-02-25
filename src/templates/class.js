import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Class = ({data})=>(
    <div>
        {data.markdownRemark.frontmatter.title}
    </div>
);

export default Class;

export const query=graphql`
    query postByID($id : String!){
        markdownRemark(id: { eq: $id }){
            frontmatter{
                title
                subtitle
            }
            html
        }
    }
`;