import { shuffle } from "lodash"
import * as React from "react"
import Masonry from "react-masonry-css"
import { Maybe, Mdx, MdxFields, MdxFrontmatter } from "../../global"
import News from "../../pages/news"
import { FullNewsComponent } from "./full_news"
import { LeftNewsComponent } from "./left_news"
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
        const title = node.frontmatter.title || node.fields.slug
        const date = node.frontmatter.date || node.fields.slug
        const description = node.frontmatter.description || node.fields.slug
        /* eslint-disable  @typescript-eslint/no-var-requires */
        const require1 = require("../../../content/" + node.frontmatter.image)
        const type = node.frontmatter.type
        console.log(type)
        return (
          <React.Fragment key={index}>
            {!["RIGHT", "LEFT"].includes(type) && (
              <FullNewsComponent
                require1={require1}
                slug={node.fields.slug}
                title={title}
                description={description}
                date={date + " | NOTÍCIA"}
              />
            )}
            {["RIGHT", "LEFT"].includes(type) && (
              <LeftNewsComponent
                type={type}
                slug={node.fields.slug}
                title={title}
                date={date + " | NOTÍCIA"}
                description={description}
                require1={require1}
              />
            )}
          </React.Fragment>
        )
      })}
    </Masonry>
  )
}
