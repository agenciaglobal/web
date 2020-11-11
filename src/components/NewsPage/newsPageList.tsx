import * as React from "react"
import { useState } from "react"
import { makeStyles, Theme } from "@material-ui/core"
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

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: 0,
    boxShadow: "none",
    height: 44,
    padding: "0px 50px",
    fontFamily: "GSThree",
    fontSize: 18,
    color: "#000",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      boxShadow: `0px 0px 0px 1px ${theme.palette.primary.contrastText} inset`,
      backgroundColor: theme.palette.secondary.main,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.secondary.main,
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
}))

export const NewsPageList = withWidth()(
  ({ news, width }: Props & WithWidthProps): React.ReactElement => {
    const classes = useStyles()
    const pace = 6
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
        {/* <GlobalPageTitle label={"News"}></GlobalPageTitle> */}
        <Masonry
          breakpointCols={{ default: 3, 700: 1, 1500: 2 }}
          className="global-news-grid"
          columnClassName="global-news-grid-column"
          style={{
            // marginTop: 200,
            paddingTop: 30,
            // transform: `translate( -${0}px , -${187}px )`,
          }}
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
            style={{
              padding: "32px 0px 56px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              className={classes.button}
              // style={{ background: "#FFCC00" }}
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
