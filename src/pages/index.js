import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useBlogIndexLink } from '../components/hooks'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ImLocation } from "@react-icons/all-files/im/ImLocation"
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode"
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart"
import { OverlayCard } from '../components/images'
import { BlogPostPreview } from '../components/text'
import moment from 'moment'

const DescriptionItem = ({ description, children }) => {
  return (
    <div class="row fs-5 py-lg-1">
      <span class="col-2 text-center">{children}</span>
      <span class="col">{description}</span>
    </div>
  )
}

const DescriptionBlock = () => {
  return (
    <div class="row p-3 p-lg-5 align-items-center">
      <div class="col-lg mb-5 mb-lg-0">
        <StaticImage
          alt='Portrait Thilo Wendt'
          src='../images/thilo_wendt.jpg'></StaticImage>
      </div>
      <div class="col-lg">
        <span class="fs-1 row text-center fw-semibold mx-5 px-lg-0 mb-3 mb-xl-5">
          Enjoying my life cos nobody else can!
        </span>
        <DescriptionItem description="Madrid, Spain"><ImLocation /></DescriptionItem>
        <DescriptionItem description="Dancing and Calisthenics"><AiFillHeart /></DescriptionItem>
        <DescriptionItem description="Software Developer C/C++"><FaLaptopCode /></DescriptionItem>
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const post_fm = data.allMdx.nodes[0].frontmatter
  const blogIndex = useBlogIndexLink();
  return (
    <Layout pageTitle="Home Page">
      <DescriptionBlock />
      <hr />
      <div class="row px-3 px-lg-5">
        <h1>Latest Post</h1>
      </div>
      <div class="px-3 px-lg-5 pb-3">
        <OverlayCard
          image={post_fm.hero_image}
          image_alt={post_fm.hero_image_alt}
        >
          <BlogPostPreview
            title={post_fm.title}
            link={`${blogIndex.link}/${post_fm.date}/${post_fm.slug}`}
            post_date={moment(post_fm.date).format("D MMMM YYYY")}
            language={post_fm.language}
            tags={post_fm.tags}
          >
            {post_fm.summary}
          </BlogPostPreview>
        </OverlayCard>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}, limit: 1) {
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
    }
  }
}
`