import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site!</h1>
      <p>Following Gatsby tutorial</p>
      <StaticImage
        alt='Desert with mountains'
        src='../images/neom.jpg'></StaticImage>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage