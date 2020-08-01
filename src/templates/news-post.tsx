import { Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import ScrollMenu from "react-horizontal-scrolling-menu"
import { ExpandTExt } from "../components/NewsPage/components/expand_text"
import { NewsPage } from "../components/NewsPage/newsPage"
import { SitePageContext } from "../global"
import "./scroll.css"

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
}))

const selected = "item1"

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>
}
const MenuItem = ({ description, date, image, title }) => {
  return (
    <div className={`menu-item`} style={{ background: `url(${image})` }}>
      <ExpandTExt date={date} title={title} description={description} />
    </div>
  )
}

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
          data={news
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
                  <MenuItem
                    image={image}
                    date={el.frontmatter.date}
                    title={el.frontmatter.title}
                    description={el.frontmatter.description}
                  />
                </Link>
              )
            })}
          selected={selected}
        />
      </Box>
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
