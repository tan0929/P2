module.exports = {
  siteMetadata: {
    title: `PETALIMN`,
    subtitle: `CAKE DESIGN`,
    description: `Petalimn Cake Design is a premier bean paste flowercake design studio in Los Angeles. We are using only the finest and healthiest ingredients, like bean paste, natural food powder, rice cakes ect., they are also good vegan alternative as there is no dairy or animal products used in our some recipe. Secret tricks and tips in coloring, hand-piping, arrangement that means every cake is unique.`,
    url: `https://petalimn.com`,
    facebook: `https://www.facebook.com/petalimn/`,
    instagram: `https://www.instagram.com/petalimn/`,
    location: 'Laguna Niguel, CA, USA',
    slogan: 'Every petal we made is one of a kind',
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
