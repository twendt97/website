import * as React from 'react'
import { ImageSlider, ImageSliderText, ImageText } from './images'
import { MDXProvider } from "@mdx-js/react"
import { H1, Paragraph } from './mdx_design'


export const Layout = ({ children }) => {
    return (
        <MDXProvider components={{
            h1: H1,
            p: Paragraph,
            ImageSlider,
            ImageText,
            ImageSliderText
        }}> {children}</MDXProvider >
    )
}