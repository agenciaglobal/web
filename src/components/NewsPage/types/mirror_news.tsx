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
  style: {
    border: "1px solid",
    borderColor: theme.palette.primary.contrastText,
    width: "48%",
  },
  lag: {
    display: "flex",
    justifyContent: "space-between",
    height: "30vw",
  },
}))

export const MirrorNewsComponent = (x: Props): React.ReactElement | null => {
  const props = x.current
  const classes = useStyles()
  const imageSrc = x.current.image || ""
  return props.type === "MIRROR" ? (
    <div>
      <Link
        className={"global-news-mirror"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={props.slug || ""}
      >
        <div className={classes.lag}>
          <div
            style={{
              backgroundImage: `url(${imageSrc})`,
              width: "48%",
            }}
          >
            <ExpandTExt
              postType={props.postType || ""}
              date={props.type}
              title={props.title || ""}
              description={props.description || ""}
            />
          </div>
          <div style={{}} className={classes.style}>
            <ExpandTExt
              date={props.type}
              title={props.title || ""}
              description={props.description || ""}
            />
          </div>
        </div>
      </Link>
    </div>
  ) : null
}
