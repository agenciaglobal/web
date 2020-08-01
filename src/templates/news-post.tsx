import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import React from "react"
import { NewsPage } from "../components/NewsPage/newsPage"
import { RelatedContent } from "../components/RelatedContent"
import { NewsPostBySlugQuery, SitePageContext } from "../global"
import "./scroll.css"

interface Props {
  data?: NewsPostBySlugQuery
  pageContext: SitePageContext
}

const NewsPostTemplate = (props: Props): React.ReactElement => {
  const post = props.data.mdx
  const news = props.pageContext.news
  return (
    <React.Fragment>
      <Typography>newss</Typography>
      <Typography>{post.frontmatter.title}</Typography>
      <Typography style={{ display: `block` }}>
        {post.frontmatter.date}
      </Typography>
      <RelatedContent news={news} />
      <NewsPage news={news} />
    </React.Fragment>
  )
}

export default NewsPostTemplate

export const pageQuery = graphql`
  query NewsPostBySlug($slug: String!) {
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
      }
    }
  }
`
