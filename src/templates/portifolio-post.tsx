import { Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import React from "react"
import { PortifolioSwitcher } from "../components/PortifolioSwitcher/portifolioSwticher"
import { PortifolioPostBySlugQuery, SitePageContext } from "../global"

interface Props {
  data?: PortifolioPostBySlugQuery
  pageContext: SitePageContext
}

const PortifolioPostTemplate = ({
  data: { mdx: post },
  pageContext: { next, previous },
}: Props): React.ReactElement => {
  return (
    <React.Fragment>
      <Typography>{post.frontmatter.description}</Typography>
      <PortifolioSwitcher previous={previous} next={next} />
    </React.Fragment>
  )
}

export default PortifolioPostTemplate

export const pageQuery = graphql`
  query PortifolioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
