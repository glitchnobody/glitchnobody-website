/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "GlitchNobody",
    description: "Welcome to my portfolio",
    url: "https://www.glitchnobody.com",
  },

  plugins: [
    `gatsby-plugin-sass`,

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins"],
        },
      },
    },
  ],
}
