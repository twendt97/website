import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <h1>About Me</h1>
            <p>Hi there! Currently living and working in spain</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage