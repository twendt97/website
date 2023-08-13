import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    siteTitle
} from './layout.module.css'
import Navbar from './navigation'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          id
          siteMetadata {
            title
          }
        }
      }`
    )

    return (
        <div>
            <Navbar></Navbar>
            <div className={container}>
                <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>
            </div >
        </div>
    )
}

export default Layout