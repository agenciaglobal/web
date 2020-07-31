import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { GlobalPageTitle } from "../components/GlobalPageTitle/globalTitle"
import { NewsPage } from "../components/NewsPage/newsPage"
import { BlogQueryQuery } from "../global"
import "../components/NewsPage/index.css"

const News = (props: { data?: BlogQueryQuery }): React.ReactElement => {
  const { data } = props
  const { t } = useI18next()
  const news = data.allMdx.edges
  console.log(news)
  return (
    <React.Fragment>
      <GlobalPageTitle label={t("news")} />
      <NewsPage news={news} />
    </React.Fragment>
  )
}

export default News

export const pageQuery = graphql`
  query NewsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/news/" } }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/M/YYYY")
            title
            description
            image
            type
          }
        }
      }
    }
  }
`
