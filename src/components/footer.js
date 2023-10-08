import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"

export const Footer = ({ }) => {
    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
                socialMedia {
                    link
                    name
                }
            }
        }
    }
    `)
    return (
        <div class="container-fluid bg-dark">
            <div class="d-flex justify-content-around py-3">
                {data.site.siteMetadata.socialMedia.map((item) =>
                    <a
                        class="link-light link-opacity-50-hover fs-1"
                        href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.name === "linkedin" ? <AiFillLinkedin /> : ""}
                        {item.name === "github" ? <AiFillGithub /> : ""}
                        {item.name === "instagram" ? <AiOutlineInstagram /> : ""}
                    </a>
                )}
            </div>
        </div>
    )
}