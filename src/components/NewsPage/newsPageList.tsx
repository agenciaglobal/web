import * as React from "react"
import { useState } from "react"
import Masonry from "react-masonry-css"
import { callBackFN } from "./shared/picker_callback"
import { Maybe, SitePageContextNews } from "global"
import { Button, isWidthDown, WithWidthProps } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import withWidth from "@material-ui/core/withWidth"
import { FullNewsComponent } from "components/NewsPage/types/full_news"

interface Props {
  news?: Array<Maybe<SitePageContextNews>> | null | undefined
}

const notEmpty = <TValue extends unknown>(
  value: TValue | null | undefined,
): value is TValue => value !== null && value !== undefined
export const NewsPageList = withWidth()(
  ({ news, width }: Props & WithWidthProps): React.ReactElement => {
    const pace = 2
    const [total, setTotal] = useState(pace)
    const isXS = isWidthDown("xs", width || "xs")
    const map = (news || [])
      .filter((asd, index) => index + 1 <= total)
      .map((f) => ({
        ...f?.node?.frontmatter,
        slug: f?.node?.fields?.slug,
      }))
    console.log(map)
    console.log("isXS")
    console.log(isXS)
    return (
      <React.Fragment>
        <Masonry
          breakpointCols={{ default: 3, 700: 1, 1500: 2 }}
          className="global-news-grid"
          columnClassName="global-news-grid-column"
        >
          {isXS
            ? map.map((current, index) => {
                return (
                  <FullNewsComponent
                    force={true}
                    key={index}
                    current={current}
                  />
                )
              })
            : map.map(callBackFN)}
        </Masonry>
        {total !== (news?.length || 0) && (
          <Box
            style={{ padding: 20, display: "flex", justifyContent: "center" }}
          >
            <Button
              style={{ background: "#FFCC00" }}
              onClick={() => {
                const result =
                  total + pace < (news?.length || 0)
                    ? total + pace
                    : news?.length || 0
                console.log(result)
                setTotal(result)
              }}
            >
              Ver Mais Notícias
            </Button>
          </Box>
        )}
      </React.Fragment>
    )
  },
)
