import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const ImageSlider = () => {
    const allImages = useStaticQuery(graphql`
    query {
        allFile(
            filter: {extension: {in: ["jpg", "png", "JPG", "PNG", "jpeg", "JPEG"]}}
        ) {
            nodes {
            relativeDirectory
            childImageSharp {
                gatsbyImageData
            }
            }
        }
    }`
    )
    console.log(allImages)
    return (
        <h1>Hello World</h1>
    )
}

export default ImageSlider