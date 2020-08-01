import { graphql } from "gatsby"
import React from "react"
import { NewsContent } from "../components/NewsContent/newsContant"
import { NewsPageList } from "../components/NewsPage/newsPageList"
import { NewsRelatedContent } from "../components/NewsRelatedContent"
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
      <NewsContent current={post} news={news} />
      <NewsRelatedContent news={news} />
      <NewsPageList news={news} />
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
