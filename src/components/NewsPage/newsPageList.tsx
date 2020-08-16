import * as React from "react"
import Masonry from "react-masonry-css"
import { callBackFN } from "./shared/picker_callback"
import { Maybe, SitePageContextNews } from "global"
import { useState } from "react"
import { Button } from "@material-ui/core"
import Box from "@material-ui/core/Box"

interface Props {
  news?: Array<Maybe<SitePageContextNews>> | null | undefined
}

export const NewsPageList = ({ news }: Props): React.ReactElement => {
  const pace = 2
  const [total, setTotal] = useState(pace)
  const map = (news || [])
    .filter((asd, index) => index + 1 <= total)
    .map((f) => ({
      ...f?.node?.frontmatter,
      slug: f?.node?.fields?.slug,
    }))
  return (
    <React.Fragment>
      <Masonry
        breakpointCols={{ default: 3, 700: 1, 1500: 2 }}
        className="global-news-grid"
        columnClassName="global-news-grid-column"
      >
        {map.map(callBackFN)}
      </Masonry>
      <Box style={{ padding: 20, display: "flex", justifyContent: "center" }}>
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
    </React.Fragment>
  )
}
