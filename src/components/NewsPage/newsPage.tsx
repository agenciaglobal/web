import * as React from "react"
import Masonry from "react-masonry-css"
import { Maybe, Mdx } from "../../global"
import { callBackFN } from "./shared/picker_callback"
import { ActualNews, SlugType } from "./types"

interface Props {
  news: Array<{
    node: Pick<Mdx, "excerpt"> & {
      fields?: Maybe<SlugType>
      frontmatter?: Maybe<ActualNews>
    }
  }>
}

export const NewsPage = ({ news }: Props): React.ReactElement => {
  const map = news.map((f) => ({
    ...f.node.frontmatter,
    slug: f.node.fields.slug,
  }))
  return (
    <Masonry
      breakpointCols={{ default: 3, 700: 1, 1500: 2 }}
      className="global-news-grid"
      columnClassName="global-news-grid-column"
    >
      {map.map(callBackFN)}
    </Masonry>
  )
}
