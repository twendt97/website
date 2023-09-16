import * as React from 'react'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import { graphql } from 'gatsby'

const BlogPost = (props /* { data, children } */) => {
  return (
    <Layout pageTitle={props.data.mdx.frontmatter.title}>
      <p>Posted: {props.data.mdx.frontmatter.date}</p>
      <h1 className='text-secondary'>{props.data.mdx.frontmatter.title}</h1>
      {props.children}
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost