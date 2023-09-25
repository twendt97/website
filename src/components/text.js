import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const BlogPostPreview = ({ link, title, post_date, language, location, children }) => {
    const flags = useStaticQuery(graphql`{
    allFile(
        filter: {sourceInstanceName: {eq: "components"}, relativePath: {regex: "/static_images/.*_flag.png$/"}}
    ) {
        nodes {
        relativeDirectory
        relativePath
        name
        childImageSharp {
            gatsbyImageData(
                height: 20 
                width: 20
                quality: 100
                outputPixelDensities: [4]
                transformOptions: {cropFocus: CENTER}
            )
        }
        }
    }
    }`)
    var flag_name;
    switch (language) {
        case 'en':
            flag_name = 'british_flag'
            break;
        case 'de':
            flag_name = 'german_flag'
            break;
        case 'es':
            flag_name = 'spanish_flag'
            break;
        default:
            throw new Error("Language code " + language + " not recognized")
    }
    const flag_img = getImage(flags.allFile.nodes.find((node) => node.name === flag_name))
    return (
        <div>
            <h1 class="card-title">
                <Link to={link} className='text-dark text-decoration-none'>
                    {title}
                </Link>
            </h1>
            <div class="my-3 card-text d-none d-lg-block fs-5">
                <p>
                    {children}
                </p>
            </div>
            <div class="row justify-content-between justify-content-lg-around my-3 my-lg-5">
                <div class="col">
                    <table class="table table-borderless">
                        <tr>
                            <td>
                                <GatsbyImage
                                    image={flag_img}
                                    className='rounded-5 img-fluid my-3'
                                />
                            </td>
                            <td>Location</td>
                        </tr>
                        <tr>
                            <td>Posted on</td>
                            <td>{post_date}</td>
                        </tr>
                        <tr>
                            <td>Tags</td>
                        </tr>
                    </table>
                </div>
                <div class="col text-center">
                    <Link to={link} className='btn btn-outline-dark btn-lg py-2 px-5'>Read</Link>
                </div>
            </div>
        </div>
    )
}