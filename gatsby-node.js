/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

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
                  }
                  html
                  id
              }
          }
      }
  }`).then(res=>{
      if(res.errors){
          console.log("nonononono");
          return Promise.reject(res.errors);
      }
      const posts = res.data.allMarkdownRemark.edges;
      posts.forEach(({node})=>{
          const id = node.id;
          createPage({
              path: node.fields.slug,
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