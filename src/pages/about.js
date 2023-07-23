import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <h1>About Me</h1>
            <p>Hi there! Currently living and working in spain</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage