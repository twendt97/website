import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ImPencil2 } from '@react-icons/all-files/im/ImPencil2'

export const BlogPostPreview = ({ link, title, post_date, language, tags, children }) => {
    const flags = useStaticQuery(graphql`{
    allFile(
        filter: {
            sourceInstanceName: {eq: "components"}, 
            relativePath: {regex: "/static_images/.*_flag.png$/"}
        }
    ) {
        nodes {
        relativePath
        name
        childImageSharp {
            gatsbyImageData(
                height: 30 
                width: 30
                quality: 100
                transformOptions: {cropFocus: CENTER, fit: FILL}
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
            <div class="row"><h3 class="card-title">
                <Link to={link}
                    className='text-capitalize link-dark link-opacity-75 link-opacity-100-hover text-decoration-none'>
                    {title}
                </Link>
            </h3></div>
            <div class="my-3 card-text d-none d-lg-block fs-5 row">
                <p>
                    {children}
                </p>
            </div>
            <div class='row my-2 my-md-4 mx-2'><div class='col'>
                <div class="row align-items-center my-2">
                    <span class='col-2 p-0'>
                        <GatsbyImage image={flag_img} className='rounded-5 img-fluid' />
                    </span>
                    <span class="col-3">
                        <Link to={link} className='btn btn-outline-dark px-4'>
                            {read_lable}
                        </Link>
                    </span>
                </div>
                <div class='row align-items-center fs-6'>
                    <span class="col-2 p-0 ps-0 fs-4"><ImPencil2 /></span>
                    <span class="col">{post_date}</span>
                </div>
            </div>
                <div class='col-4 col-md-6'>
                    {tags !== null ? tags.slice(0, 5).map((tag) =>
                        <span class='badge text-bg-primary mx-1'> {'#' + tag}</span>) : ''}
                </div>
            </div>
        </div>
    )
}