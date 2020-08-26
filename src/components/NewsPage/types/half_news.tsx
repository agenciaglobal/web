import { Box, Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import { SlugType } from "components/NewsPage/types"
import { SitePageContextNewsNodeFrontmatter } from "global"

interface Props {
  current: SitePageContextNewsNodeFrontmatter & SlugType
}

const useStyles = makeStyles((theme: Theme) => ({
  border: {
    border: "1px solid",
    borderColor: theme.palette.primary.contrastText,
  },
  style: {
    width: "48%",
  },
  style2: {
    width: "48%",
  },
  lag: {
    display: "flex",
    justifyContent: "space-between",
    height: 0,
    paddingBottom: "100%",
  },
}))

export const HalfNewsComponent = (props: Props): React.ReactElement | null => {
  const classes = useStyles()
  const s = props.current?.image || ""
  const imageSrc = "" + s
  const date = props.current.date || ""
  const test = props.current?.type === "HALF"
  return test ? (
    <div>
      <Link
        className={"global-news-half"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={props.current?.slug || ""}
      >
        <Box className={classes.lag}>
          <div className={classes.style}>
            <div style={{ paddingTop: "35%" }} />
            <div
              // className={classes.border}
              style={{
                height: "32vw",
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <ExpandTExt
                postType={props.current?.postType || ""}
                date={date}
                title={props.current?.title || ""}
                description={props.current?.description || ""}
              />
            </div>
          </div>
          <div className={classes.style2}>
            <div
              className={classes.border}
              style={{ height: "32vw", display: "flex", alignItems: "center" }}
            >
              <div style={{ padding: 15, width: "calc(100% - 30px)" }}>
                <div style={{ height: 40 }}></div>
                <Typography
                  style={{
                    fontFamily: "GSThree",
                    fontSize: 28,
                  }}
                >
                  {props.current?.quote || ""}
                  {/* Say something meanignfull Say something meanignfull */}
                </Typography>
              </div>
            </div>
            <div style={{ height: "20%" }} />
          </div>
        </Box>
      </Link>
    </div>
  ) : null
}
