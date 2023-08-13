
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const Navbar = ({ location }) => {
    console.log(location)
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
            menuItems {
                link
                name
            }
            }
        }
    }`
    )
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {data.site.siteMetadata.menuItems.map((item) =>
                            <li class="nav-item">
                                <Link to={item.link}
                                    className='nav-link'
                                    activeClassName='active'
                                >{item.name}
                                </Link>
                            </li>
                        )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar