import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { OverlayCard } from '../../components/images'
import { BlogPostPreview } from '../../components/text'
import moment from 'moment'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <OverlayCard
          image={node.frontmatter.hero_image}
          image_alt={node.frontmatter.hero_image_alt}
        >
          <BlogPostPreview
            title={node.frontmatter.title}
            link={`/blog/${node.frontmatter.date}/${node.frontmatter.slug}`}
            post_date={moment(node.frontmatter.date).format("D MMMM YYYY")}
            language={node.frontmatter.language}
          >
            {node.excerpt}
          </BlogPostPreview>
        </OverlayCard>
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