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
    height: "30vw"
  },
}))

export const QuoteNewsComponent = ({
  current: { description, slug, title, type, postType },
}: Props): React.ReactElement | null => {
  const classes = useStyles()
  return type === "QUOTE" ? (
    <div>
      <Link
        className={"global-news-quote"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={slug || ""}
      >
        <div className={classes.lag}>
          <div style={{}} className={classes.style}>
            <ExpandTExt
              postType={postType || ""}
              date={type}
              title={title || ""}
              description={description || ""}
            />
          </div>
        </div>
      </Link>
    </div>
  ) : null
}
