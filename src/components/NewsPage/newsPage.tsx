import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { shuffle } from "lodash"
import Masonry from "react-masonry-css"
import { Maybe, Mdx, MdxFields, MdxFrontmatter } from "../../global"
import News from "../../pages/news"
import { FullNewsComponent } from "./full_news"
import { HalNewsComponent } from "./half_news"
import "./index.css"

type News = {
  node: Pick<Mdx, "excerpt"> & {
    fields?: Maybe<Pick<MdxFields, "slug">>
    frontmatter?: Maybe<
      Pick<MdxFrontmatter, "date" | "title" | "description" | "type">
    >
  }
}

interface Props {
  news: Array<News>
}

export const NewsPage = ({ news }: Props): React.ReactElement => {
  console.log(news)
  return (
    <Masonry
      breakpointCols={{ default: 2, 700: 1 }}
      className="global-news-grid"
      columnClassName="global-news-grid-column"
    >
      {shuffle(news).map(({ node }, index: number) => {
        console.log(node)
        const title = node.frontmatter.title || node.fields.slug
        const date = node.frontmatter.date || node.fields.slug
        const description = node.frontmatter.description || node.fields.slug
        /* eslint-disable  @typescript-eslint/no-var-requires */
        const require1 = require("../../../content/" + node.frontmatter.image)
        return (
          <Link
            style={{ textDecoration: "none", minHeight: 300 }}
            key={index}
            to={"/news" + node.fields.slug}
          >
            {node.frontmatter.type === "FULL" && (
              <FullNewsComponent
                require1={require1}
                title={title}
                description={description}
                date={date + " | NOTÍCIA"}
              />
            )}

            {["HALF", "MIRROR", "LEFT", "RIGHT", "QUOTE"].includes(
              node.frontmatter.type,
            ) && (
              <HalNewsComponent
                type={node.frontmatter.type}
                title={title}
                date={date + " | NOTÍCIA"}
                description={description}
                require1={require1}
              />
            )}
          </Link>
        )
      })}
    </Masonry>
  )
}
