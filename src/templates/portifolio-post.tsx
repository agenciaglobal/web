import { Typography } from "@material-ui/core"
import { SizeMe } from "react-sizeme"
import { graphql } from "gatsby"
import React from "react"
import { PortifolioSwitcher } from "../components/PortifolioSwitcher/portifolioSwticher"
import { PortifolioPostBySlugQuery, SitePageContext } from "../global"
import YouTube from "react-youtube"

interface Props {
  data?: PortifolioPostBySlugQuery
  pageContext: SitePageContext
}

// use an actual url library
const extractIdFromUrl = (data: string | undefined) =>
  data?.replace("https://www.youtube.com/watch?v=", "")

const PortifolioPostTemplate = ({
  data,
  pageContext,
}: Props): React.ReactElement => {
  const { next, previous } = pageContext
  return (
    <React.Fragment>
      <Typography>{data?.mdx?.frontmatter?.description}</Typography>
      <Typography>
        <SizeMe monitorHeight={true}>
          {({ size }) => (
            <YouTube
              opts={{
                width: size.width?.toString(),
                height: "500",
              }}
              videoId={extractIdFromUrl(data?.mdx?.frontmatter?.youtube)}
            />
          )}
        </SizeMe>
      </Typography>
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
        image
        youtube
      }
    }
  }
`
