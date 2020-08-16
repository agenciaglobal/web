import { graphql } from "gatsby"
import _ from "lodash"
import * as React from "react"
import { HomePage } from "components/HomePage/homePage"
import { HomeQueryQuery } from "global"
import { Portifolio } from "components/HomePage/types"

interface Props {
  data?: HomeQueryQuery
}

interface UsePortifolioResult {
  all: Portifolio[]
  projects: _.Dictionary<Portifolio[]>
  categories: string[]
}

const usePortifolio = (
  data: HomeQueryQuery | undefined,
): UsePortifolioResult => {
  const all = (data?.projects.edges || []).map((d) => ({
    ...d.node.frontmatter,
    slug: d.node?.fields?.slug,
  }))
  return {
    all: all as Portifolio[],
    projects: _.groupBy(all as Portifolio[], "categorie"),
    categories: Object.keys(_.groupBy(all, "categorie")),
  }
}

const IndexPage = ({ data }: Props): React.ReactElement => {
  const { projects, categories, all } = usePortifolio(data)
  return <HomePage all={all} projects={projects} categories={categories} />
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/portifolio/" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
            categorie
          }
        }
      }
    }
  }
`
