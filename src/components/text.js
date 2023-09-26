import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BsCalendarFill } from "@react-icons/all-files/bs/BsCalendarFill"

export const BlogPostPreview = ({ link, title, post_date, language, children }) => {
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
                height: 30 
                width: 30
                quality: 100
                outputPixelDensities: [4]
                transformOptions: {cropFocus: CENTER}
            )
        }
        }
    }
    }`)
    var flag_name;
    var read_lable;
    switch (language) {
        case 'en':
            flag_name = 'british_flag';
            read_lable = 'Read';
            break;
        case 'de':
            flag_name = 'german_flag';
            read_lable = 'Lesen';
            break;
        case 'es':
            flag_name = 'spanish_flag';
            read_lable = 'Leer';
            break;
        default:
            throw new Error("Language code " + language + " not recognized")
    }
    const flag_img = getImage(flags.allFile.nodes.find((node) => node.name === flag_name))
    return (
        <div>
            <h3 class="card-title">
                <Link to={link} className='link-dark link-opacity-75 link-opacity-100-hover text-decoration-none'>
                    {title}
                </Link>
            </h3>
            <div class="my-3 card-text d-none d-lg-block fs-5">
                <p>
                    {children}
                </p>
            </div>
            <div class="d-flex justify-content-start align-items-center my-3 fs-5">
                <div class='me-3'>
                    <GatsbyImage
                        image={flag_img}
                        className='rounded-5'
                    />
                </div>
                <div class="text-center mx-2">
                    <Link to={link} className='btn btn-outline-dark px-5'>
                        {read_lable}
                    </Link>
                </div>
            </div>
            <div class='d-flex d-flex-row justify-content-start fs-5'>
                <span class="mx-1"><BsCalendarFill /></span>
                <span class="mx-4">{post_date}</span>
            </div>
        </div>
    )
}