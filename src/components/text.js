import * as React from 'react'
import { Link } from 'gatsby'

export const BlogPostPreview = ({ link, title, post_date, children }) => {
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
                            <td>Language (Logo)</td>
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