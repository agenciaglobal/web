import { navigate } from "gatsby"
import * as React from "react"
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
      breakpointCols={{ default: 2, 400: 1 }}
      className="global-news-grid"
      columnClassName="global-news-grid-column"
    >
      {_.shuffle(news).map(({ node }, index: number) => {
        const title = node.frontmatter.title || node.fields.slug
        const date = node.frontmatter.date || node.fields.slug
        const description = node.frontmatter.description || node.fields.slug
        /* eslint-disable  @typescript-eslint/no-var-requires */
        const require1 = require("../../../content/" + node.frontmatter.image)
        return (
          <>
            {node.frontmatter.type === "FULL" && (
              <FullNewsComponent
                key={index}
                onClick={() => navigate("/news" + node.fields.slug)}
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
                key={index}
                onClick={() => navigate("/news" + node.fields.slug)}
                title={title}
                date={date + " | NOTÍCIA"}
                description={description}
                require1={require1}
              />
            )}
          </>
        )
      })}
    </Masonry>
  )
}
