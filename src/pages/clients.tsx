import { graphql } from "gatsby"
import React from "react"
import { ClientPage } from "components/ClientPage/clientPage"
import { ClientQueryQuery } from "global"

const Clients = (props: { data: ClientQueryQuery }): React.ReactElement => {
  return (
    <ClientPage
      clients={props.data.allMdx.edges.map((f) => f.node.frontmatter)}
    />
  )
}

export default Clients

export const clientQueryV2 = graphql`
  query ClientQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/client/" } }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            name
            description
            image
          }
        }
      }
    }
  }
`
