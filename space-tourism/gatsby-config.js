/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Space Tourism`,
    siteUrl: 'https://gatsby.pizza',
    description: 'Lost in Space',
    twitter: '@darthChocolate',
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Barlow Condensed', 'Bellefair']
        }
      }
    }
  ]
}
