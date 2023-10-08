/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Thilo Wendt`,
    siteUrl: `https://www.thilo-wendt.de`,
    socialMedia: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/thilo-wendt/"
      },
      {
        name: "github",
        link: "https://github.com/twendt97"
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/thilow97/"
      },
    ],
    menuItems: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "Blog",
        link: "/blog"
      },
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
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `components`,
        path: `${__dirname}/src/components`,
        fastHash: true
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ]
      }
    }
  ]
}
