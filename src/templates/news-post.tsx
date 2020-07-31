import { Box } from "@material-ui/core"
import List from "@material-ui/core/List"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { ExpandTExt } from "../components/NewsPage/full_news"
import { NewsPage } from "../components/NewsPage/newsPage"
import { SitePageContext } from "../global"

const height = 660
export const useStyles = makeStyles((theme: Theme) => ({
  item: {
    color: theme.palette.primary.contrastText,
    height: "100%",
  },
  type: {
    display: "flex",
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
    height: height,
  },
  flexContainer: {
    overflowX: "scroll",
    overflowY: "hidden",
    height: height,
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
}))
const NewsPostTemplate = (props: {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  data?: any
  pageContext: SitePageContext
}): React.ReactElement => {
  const classes = useStyles()
  console.log(props.pageContext)
  console.log(props.pageContext)
  const news = props.pageContext.news
  const post = props.data.mdx

  return (
    <React.Fragment>
      <Typography>newss</Typography>
      <Typography>{post.frontmatter.title}</Typography>
      <Typography
        style={{
          display: `block`,
        }}
      >
        {post.frontmatter.date}
      </Typography>

      {/*<Box*/}
      {/*  className={classes.type}*/}
      {/*  style={{*/}
      {/*    width: 120,*/}
      {/*    position: "relative",*/}
      {/*    transform: "translate3d(-120px, 400px, 0px)",*/}
      {/*  }}*/}
      {/*/>*/}

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
        <List className={classes.flexContainer}>
          {news
            .map((d) => d.node)
            // .filter((g) => g.type === post.type)
            .map((d, index) => {
              console.log(d)
              /* eslint-disable  @typescript-eslint/no-var-requires */
              const require1 = require("../../content/" + d.frontmatter.image)
              return (
                <div key={index}>
                  <Link
                    style={{ textDecoration: "none", maxHeight: height }}
                    to={"/news" + d.fields.slug}
                  >
                    <div
                      style={{
                        margin: 24,
                        marginBottom: 80,
                        height: 460,
                        minWidth: 290,
                        backgroundImage: `url(${require1})`,
                      }}
                    >
                      <ExpandTExt
                        date={d.frontmatter.date}
                        title={d.frontmatter.title}
                        description={d.frontmatter.description}
                      />
                    </div>
                  </Link>
                </div>
              )
            })}
        </List>
      </Box>

      {/*<Box*/}
      {/*  style={{*/}
      {/*    display: "flex",*/}
      {/*    height: 40,*/}
      {/*    justifyContent: "flex-end",*/}
      {/*    // transform: "translate3d(-120px, 0px, 0px)",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Box*/}
      {/*    className={classes.type}*/}
      {/*    style={{*/}
      {/*      width: 120,*/}
      {/*      position: "relative",*/}
      {/*      transform: "translate3d(120px, -400px, 0px)",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Box>*/}
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
