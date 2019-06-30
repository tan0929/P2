module.exports = {
  siteMetadata: {
    title: `PETALIMN`,
    subtitle: `CAKE DESIGN`,
    description: `Petalimn Cake Design 是南加州洛杉磯地區數一數二的豆沙花蛋糕設計工作室。我們使用品質好以及健康的食材，例如豆沙，天然食物粉等來製作，它們也是非常好的素食材料，可以用來製作全素蛋糕與蛋糕裝飾。如何著色，擠花，運用小技巧和修改花嘴，甚至是花朵的佈局都意味著每個蛋糕的獨特性。`,
    url: `https://cn.petalimn.com`,
    facebook: `https://www.facebook.com/petalimn/`,
    instagram: `https://www.instagram.com/petalimn/`,
    location: 'Laguna Niguel, CA, USA',
    slogan: '每片花瓣都是獨一無二',
    email: 'contact@petalimn.com',
    founder: 'Evelyn W.',
    author: `James Tan`,
    defaultImage: '/logo.png',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=86400",
          ],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`${__dirname}/src/components/layout.js`)
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/gallery`,
        name: 'gallery',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/classCarousel`,
        name: 'classCarousel',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/md`,
        name: `markdowns`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/classes`,
        name: `classes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
              linkImagesToOriginal: false,
              backgroundColor: '#DAC6BD',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Petalimn`,
        short_name: `Petalimn`,
        start_url: `/`,
        background_color: `#DAC6BD`,
        theme_color: `#DAC6BD`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
