import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import Moment from 'moment'

const BlogPage = ({ data }) => {
  Moment.locale('en')
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article>
              <h2>
                <Link to={`/blog/${node.frontmatter.date}/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {Moment(node.frontmatter.date).format('MMMM D, YYYY')}</p>
              <p>{node.excerpt}</p>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date
          title
          slug
          language
        }
        id
        excerpt(pruneLength: 200)
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage