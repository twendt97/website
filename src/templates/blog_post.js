import * as React from 'react'
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { MDXProvider } from '@mdx-js/react';
import Seo from '../components/seo';
import { ImageSlider, ImageSliderText, ImageText } from '../components/images'
import { H1, Paragraph } from '../components/mdx_design'
import { useBlogIndexLink } from '../components/hooks';

export default function BlogPost({ data, children }) {
  const blogIndex = useBlogIndexLink();
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div class="py-3 p-sm-3">
        <p>Posted: {data.mdx.frontmatter.date}</p>
        <h1 className='text-secondary'>{data.mdx.frontmatter.title}</h1>
        <MDXProvider components={{
          h1: H1,
          p: Paragraph,
          ImageSlider,
          ImageText,
          ImageSliderText
        }}> {children}</MDXProvider>
        <Link to={blogIndex.link} className='btn btn-outline-dark px-4 my-4'>
          Back to all Posts
        </Link>
      </div>
    </Layout>)
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    body
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