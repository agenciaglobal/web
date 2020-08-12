import { graphql } from "gatsby"
import React from "react"
import { NewsContent } from "../components/NewsContent/newsContant"
import { NewsPageList } from "../components/NewsPage/newsPageList"
import { NewsRelatedContent } from "../components/NewsRelatedContent"
import {
  Maybe,
  NewsPostBySlugQuery,
  SitePageContext,
  SitePageContextNews,
} from "../global"
import "./scroll.css"

interface Props {
  data?: NewsPostBySlugQuery
  pageContext: SitePageContext
}

export type New = Maybe<SitePageContextNews>

const NewsPostTemplate = (props: Props): React.ReactElement => {
  const post = props.data
  const news: New[] | null | undefined = props.pageContext.news
  console.log(post)
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
      fields {
        slug
      }
      body
      frontmatter {
        title
        tags
        date(formatString: "DD/MM/YYYY")
        description
        text_1
        text_2
        image
      }
    }
  }
`
