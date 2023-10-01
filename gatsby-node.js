const path = require("path")
const postTemplate = path.resolve(`./src/templates/blog_post.js`)

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const result = await graphql(`
query {
  allMdx {
    nodes {
      frontmatter {
        slug
        date
      }
      id
      internal {
        contentFilePath
      }
    }
  }
}`)
  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }
  const posts = result.data.allMdx.nodes
  posts.forEach(node => {
    createPage({
      path: 'blog/' + node.frontmatter.date + '/' + node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id }
    })
  })
}