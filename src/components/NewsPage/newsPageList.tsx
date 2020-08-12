import * as React from "react"
import Masonry from "react-masonry-css"
import { callBackFN } from "./shared/picker_callback"
import { New } from "../../templates/news-post"
import { SlugType } from "./types"

interface Props {
  news?: Array<New> | null | undefined
}

export const NewsPageList = ({ news }: Props): React.ReactElement => {
  const map: Array<New & SlugType> = (news || []).map((f) => ({
    ...f?.node?.frontmatter,
    slug: f?.node?.fields?.slug,
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
