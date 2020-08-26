import makeStyles from "@material-ui/core/styles/makeStyles"
import { graphql, Link, navigate } from "gatsby"
import * as React from "react"
import Button from "components/Button/button"
import { BlogQueryQuery } from "global"

const useGridStyles = makeStyles(() => ({ div: { margin: "20px 0 40px" } }))

const News = (props: { data?: BlogQueryQuery }): React.ReactElement => {
  const classes = useGridStyles()
  const { data } = props
  const posts = data?.allMdx.edges
  return (
    <React.Fragment>
      <div className={classes.div}>
        {(posts || []).map(({ node }, index: number) => {
          const title = node?.frontmatter?.title || ""
          return (
            <div key={index}>
              <a
                onClick={() => {
                  void navigate("/portifolio" + node?.fields?.slug)
                }}
              >
                {title}
              </a>
              <small>{node?.frontmatter?.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node?.frontmatter?.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </React.Fragment>
  )
}

export default News

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/portifolio/" } }
      sort: { order: DESC, fields: frontmatter___jobDate }
    ) {
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
