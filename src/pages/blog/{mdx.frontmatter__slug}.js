import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = (props /* { data, children } */) => {
  console.log(props)
  const image = getImage(props.data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={props.data.mdx.frontmatter.title}>
      <p>Posted: {props.data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={props.data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={props.data.mdx.frontmatter.hero_image_credit_link}>
          {props.data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
      hero_image_credit_link
      hero_image_credit_text
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