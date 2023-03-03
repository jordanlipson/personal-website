const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: `Jordan Lipson`,
    description: 'Jordan Lipson is a product designer (and developer) passionate about creating beautiful and accessible digital interfaces.',
    image: 'src/images/favicons/ramen.svg',
    siteUrl: 'https://lipson.design',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
