import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const ImageSlider = ({ parentDirectory, children }) => {
    const allImages = useStaticQuery(graphql`
    query {
        allFile(
            filter: {extension: {in: ["jpg", "png", "JPG", "PNG", "jpeg", "JPEG"]}}
        ) {
            nodes {
            relativeDirectory
            id
            childImageSharp {
                gatsbyImageData
            }
            }
        }
    }`
    )
    const galleryImages = allImages.allFile.nodes.filter((node) =>
        node.relativeDirectory.endsWith(parentDirectory))
    const gatsbyImages = galleryImages.map((img) => getImage(img))
    const id = galleryImages[0].id
    return (
        <div class="my-3 p-4">
            <div id={id} class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {gatsbyImages.map((img, index) =>
                        <div class={(index === 0 ? "active " : "") + "carousel-item"}>
                            <GatsbyImage
                                image={img}
                                className="d-block w-100"
                            />
                        </div>
                    )}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target={"#" + id} data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={"#" + id} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
