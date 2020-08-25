import { graphql } from "gatsby"
import React from "react"
import { NewsContent } from "components/NewsContent/newsContant"
import { NewsPageList } from "components/NewsPage/newsPageList"
import { NewsRelatedContent } from "components/NewsRelatedContent/NewsRelatedContent"
import {
  Maybe,
  NewsPostBySlugQuery,
  SitePageContext,
  SitePageContextNews,
} from "global"
import "./scroll.css"

interface Props {
  data?: NewsPostBySlugQuery
  pageContext: SitePageContext
}

const NewsPostTemplate = (props: Props): React.ReactElement => {
  const post = props.data
  const news: Maybe<SitePageContextNews>[] | null | undefined =
    props.pageContext.news
  const body = post?.mdx?.body || ""
  console.log(post?.mdx)
  return (
    <React.Fragment>
      <NewsContent body={body} current={post} news={news} />
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
        postType
        author
        about
        author_image
        text_2
        image
      }
    }
  }
`
