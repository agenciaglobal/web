import { Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import ScrollMenu from "react-horizontal-scrolling-menu"
import { ExpandTExt } from "../components/NewsPage/components/expand_text"
import { NewsPage } from "../components/NewsPage/newsPage"
import {
  Maybe,
  NewsPostBySlugQuery,
  SitePageContext,
  SitePageContextNews,
} from "../global"
import "./scroll.css"

export const useStyles = makeStyles((theme: Theme) => ({
  type: {
    display: "flex",
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
    height: 660,
  },
}))

interface Props {
  data?: NewsPostBySlugQuery
  pageContext: SitePageContext
}

const RelatedContent = (props: { news: Array<Maybe<SitePageContextNews>> }) => {
  const classes = useStyles()
  return (
    <Box className={classes.type}>
      <Box
        style={{
          height: 150,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: 24,
        }}
      >
        <Typography variant={"h2"} noWrap={false} style={{ fontSize: 30 }}>
          Conteúdo Relacionado
        </Typography>
      </Box>
      <ScrollMenu
        alignCenter={false}
        data={props.news
          .map((d) => d.node)
          .map((el, index) => {
            /* eslint-disable  @typescript-eslint/no-var-requires */
            const image = require("../../content/" + el.frontmatter.image)
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={index}
                to={"/news" + el.fields.slug}
              >
                <div
                  className={`menu-item`}
                  style={{ background: `url(${image})` }}
                >
                  <ExpandTExt
                    date={el.frontmatter.date}
                    title={el.frontmatter.title}
                    description={el.frontmatter.description}
                  />
                </div>
              </Link>
            )
          })}
        selected={"item1"}
      />
    </Box>
  )
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
