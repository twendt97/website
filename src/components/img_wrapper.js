import * as React from 'react'
import { ImageSlider } from './image_slider'
import { MDXProvider } from "@mdx-js/react"

const shortcodes = { ImageSlider }

export const Layout = ({ children }) => {
    return (
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
    )
}