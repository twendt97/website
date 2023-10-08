
import { useStaticQuery, graphql } from 'gatsby'

export function useBlogIndexLink() {
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
    const blogMenuItems = data.site.siteMetadata.menuItems.filter((item) => item.name === "Blog")
    if (blogMenuItems.length === 0 || blogMenuItems.length > 1) {
        throw new Error(`URL for blog defined ${blogMenuItems.length} times`)
    }
    return blogMenuItems[0]
}
