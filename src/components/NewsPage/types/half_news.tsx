import { Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "../components/expand_text"
import { SlugType } from "../types"
import { useRequireNewImage } from "../shared/useRequireNewImage"
import { SitePageContextNewsNodeFrontmatter } from "../../../global"

interface Props {
  current: SitePageContextNewsNodeFrontmatter & SlugType
}

const useStyles = makeStyles((theme: Theme) => ({
  border: {
    border: "3px solid",
    borderColor: theme.palette.primary.contrastText,
  },
  style: {
    width: "40%",
  },
  style2: {
    width: "40%",
  },
  lag: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

export const HalfNewsComponent = (props: Props): React.ReactElement | null => {
  const classes = useStyles()
  const imageSrc = useRequireNewImage(props.current?.image || "")
  const date = props.current.date + "| NOTÍCIAS"
  const test = props.current?.type === "HALF"
  return test ? (
    <div>
      <Link
        className={"global-news-half"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={"/news" + props.current?.slug}
      >
        <Box className={classes.lag}>
          <div className={classes.style}>
            <div style={{ height: "20%" }} />
            <div
              className={classes.border}
              style={{ height: "80%", backgroundImage: `url(${imageSrc})` }}
            >
              <ExpandTExt
                date={date}
                title={props.current?.title || ""}
                description={props.current?.description || ""}
              />
            </div>
          </div>
          <div className={classes.style2}>
            <div
              className={classes.border}
              style={{ height: "80%", display: "grid" }}
            >
              <ExpandTExt
                date={date}
                title={props.current?.title || ""}
                description={props.current?.description || ""}
              />
            </div>
            <div style={{ height: "20%" }} />
          </div>
        </Box>
      </Link>
    </div>
  ) : null
}
