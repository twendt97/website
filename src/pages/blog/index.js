import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { OverlayCard } from '../../components/images'
import { BlogPostPreview } from '../../components/text'
import moment from 'moment'
import { useBlogIndexLink } from '../../components/hooks'

const BlogPage = ({ data }) => {
  const blogIndex = useBlogIndexLink();
  return (
    <Layout pageTitle={blogIndex.name}>
      <div class="py-3 p-sm-3">
        {data.allMdx.nodes.map((node) => (
          <OverlayCard
            image={node.frontmatter.hero_image}
            image_alt={node.frontmatter.hero_image_alt}
          >
            <BlogPostPreview
              title={node.frontmatter.title}
              link={`${blogIndex.link}/${node.frontmatter.date}/${node.frontmatter.slug}`}
              post_date={moment(node.frontmatter.date).format("D MMMM YYYY")}
              language={node.frontmatter.language}
              tags={node.frontmatter.tags}
            >
              {node.frontmatter.summary}
            </BlogPostPreview>
          </OverlayCard>
        ))
        }
      </div>
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
        tags
        summary
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77, transformOptions: {cropFocus: ATTENTION})
          }
        }
      }
      id
    }
  }
}
`

export const Head = () => <Seo title="Blog" />

export default BlogPage