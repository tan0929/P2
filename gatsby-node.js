/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const _ = require('lodash')

exports.createPages = ({graphql, actions})=>{
  const { createPage } = actions;

  return graphql(`{
    allMarkdownRemark(filter:{frontmatter:{templateKey :{
      eq: "class"
    }}}){
          edges{
              node{
                  fields{
                      slug
                  }
                  frontmatter{
                      templateKey
                      path
                  }
                  id
              }
          }
      }
  }`).then(res=>{
      if(res.errors){
          return Promise.reject(res.errors);
      }
      const posts = res.data.allMarkdownRemark.edges;
      posts.forEach(({node})=>{
          const id = node.id;
          //const classPath = `/classes/${_.kebabCase(node.fields.slug)}/`;
          //this line to insure petalimn chinese path and english path are the same;
          //in english version, path should equals title equals slug
          const classPath = `/classes/${_.kebabCase(node.frontmatter.path)}`;
          createPage({
              path: classPath,
              component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
              context: {
                  id,
              }
          });
      });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    fmImagesToRelative(node); // convert image paths for gatsby images
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode });
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }