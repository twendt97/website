import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export function useAllImages() {
    const allImages = useStaticQuery(graphql`
    query {
        allFile(
            filter: {extension: {in: ["jpg", "png", "JPG", "PNG", "jpeg", "JPEG"]}}
        ) {
            images: nodes {
            relativeDirectory
            relativePath
            id
            childImageSharp {
                gatsbyImageData
            }
            }
        }
    }`
    )
    return allImages
}

const SideBySide = ({ left, right }) => {
    return (
        <div class="row align-items-center my-4">
            <div class="col-lg-6">
                {left}
            </div>
            <div class="col-lg-6">
                {right}
            </div>
        </div>
    )
}

export const ImageSlider = ({ parentDirectory }) => {
    const galleryImages = useAllImages().allFile.images.filter((img) =>
        img.relativeDirectory.endsWith(parentDirectory))
    if (galleryImages.length === 0)
        throw new Error("No images found in parent directory " + parentDirectory)
    const gatsbyImages = galleryImages.map((img) => getImage(img))
    const id = galleryImages[0].id
    return (
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
    )
}

export const ImageSliderText = ({ parentDirectory, children }) => {
    return (
        <SideBySide
            left={children}
            right={<ImageSlider parentDirectory={parentDirectory} />}
        />
    )
}

export const ImageText = ({ image, children }) => {
    const selectedImg = useAllImages().allFile.images.filter(
        (img) => img.relativePath.includes(image))
    if (selectedImg.length === 0)
        throw new Error("No image found for file name " + image)
    if (selectedImg.length > 1)
        throw new Error("More than one image found for file name " + image)
    const gatsbyImg = getImage(selectedImg[0])
    return (
        <SideBySide
            left={children}
            right={<GatsbyImage image={gatsbyImg} className='d-block' />}
        />
    )
}

export const OverlayCard = ({ image, image_alt, children }) => {
    return (
        <div class="card text-dark my-4 border-0 rounded-0">
            <GatsbyImage
                image={getImage(image)}
                className="card-img rounded-0"
                alt={image_alt}
            />
            <div class="card-img-overlay bg-light bg-opacity-75 p-4 p-md-5 m-md-5 rounded-0">
                {children}
            </div>
        </div >
    )
}
