import * as React from 'react'
import { ImageSlider, ImageSliderText, ImageText } from './images'
import { MDXProvider } from "@mdx-js/react"

const shortcodes = { ImageSlider, ImageText, ImageSliderText }

export const Layout = ({ children }) => {
    return (
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
    )
}