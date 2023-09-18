import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Moment from 'moment'

const BlogPage = ({ data }) => {
  Moment.locale('en')
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <div class="card text-light my-4 border-0 rounded-0">
          <GatsbyImage
            image={getImage(node.frontmatter.hero_image)}
            className="card-img rounded-0"
            alt={node.frontmatter.hero_image_alt}
          />
          <div class="card-img-overlay bg-dark bg-opacity-75 p-5 m-5">
            <h1 class="card-title">
              <Link
                to={`/blog/${node.frontmatter.date}/${node.frontmatter.slug}`}
                className='text-light text-decoration-none'
              >
                {node.frontmatter.title}
              </Link>
            </h1>
            <p class="card-text d-none d-lg-block fs-5">
              {node.excerpt}
            </p>
          </div>
        </div>
      ))
      }
    </Layout >
  )
}
export const query = graphql`
query MyQuery {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date
        title
        slug
        language
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.77
              transformOptions: {cropFocus: ATTENTION}
            )
          }
        }
      }
      id
      excerpt(pruneLength: 200)
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage