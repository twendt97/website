import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
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
            <div className="container bg-light shadow my-3 p-4">
                <main>
                    {children}
                </main>
            </div >
        </div>
    )
}

export default Layout