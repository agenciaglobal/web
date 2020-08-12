import * as React from "react"
import { FullNewsComponent } from "../types/full_news"
import { HalfNewsComponent } from "../types/half_news"
import { LeftNewsComponent } from "../types/left_news"
import { MirrorNewsComponent } from "../types/mirror_news"
import { QuoteNewsComponent } from "../types/quote_news"
import { RightNewsComponent } from "../types/right_news"
import { SlugType } from "../types"
import { SitePageContextNewsNodeFrontmatter } from "../../../global"

export const callBackFN: (
  news: SitePageContextNewsNodeFrontmatter & SlugType,
  index: number,
) => React.ReactElement = (current, index) => {
  return current.type === "HALF" ? (
    <HalfNewsComponent key={index} current={current} />
  ) : current.type === "MIRROR" ? (
    <MirrorNewsComponent key={index} current={current} />
  ) : current.type === "FULL" ? (
    <FullNewsComponent key={index} current={current} />
  ) : current.type === "QUOTE" ? (
    <QuoteNewsComponent key={index} current={current} />
  ) : current.type === "LEFT" ? (
    <LeftNewsComponent key={index} current={current} />
  ) : (
    <RightNewsComponent key={index} current={current} />
  )
}
