import { graphql } from "gatsby"
import React from "react"
import { Typography } from "@material-ui/core"
import { KeyboardArrowDown } from '@material-ui/icons';
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
import "./animation.css"

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
      <div className="animate"
          style={{
            transform: `translateY(-80px)`,
            textAlign: "center"
          }}
      
      >
        <Typography
          style={{
            fontSize: 26
          }}
        >
          Veja mais notícias
        </Typography>
        <KeyboardArrowDown
          style={{
            fontSize: 26
          }}
        />
      </div>

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
