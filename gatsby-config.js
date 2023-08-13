/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My First Gatsby Blog`,
    siteUrl: `https://www.yourdomain.tld`,
    menuItems: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "Blog",
        link: "/blog"
      },
      {
        name: "About",
        link: "/about"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
