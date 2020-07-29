import { Typography } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { graphql, navigate } from "gatsby"
import * as React from "react"
import { BlogQueryQuery } from "../global"

const useGridStyles = makeStyles(() => ({ div: { margin: "20px 0 40px" } }))

const News = (props: { data?: BlogQueryQuery }): React.ReactElement => {
  const { data } = props
  const classes = useGridStyles()
  const posts = data.allMdx.edges
  return (
    <React.Fragment>
      <div className={classes.div}>
        {posts.map(({ node }, index: number) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={index}>
              <Typography onClick={() => navigate("/news" + node.fields.slug)}>
                {title}
              </Typography>
              <Typography>{node.frontmatter.date}</Typography>
            </div>
          )
        })}
      </div>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
