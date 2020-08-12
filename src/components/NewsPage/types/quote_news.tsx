import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "../components/expand_text"
import { SlugType } from "../types"
import { SitePageContextNewsNodeFrontmatter } from "../../../global"

interface Props {
  current: SitePageContextNewsNodeFrontmatter & SlugType
}

const useStyles = makeStyles((theme: Theme) => ({
  style: {
    border: "3px solid",
    borderColor: theme.palette.primary.contrastText,
    height: "100%",
    width: "40%",
    marginLeft: "auto",
  },
}))

export const QuoteNewsComponent = ({
  current: { description, slug, title, type },
}: Props): React.ReactElement | null => {
  const classes = useStyles()
  return type === "QUOTE" ? (
    <div>
      <Link
        className={"global-news-quote"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={"/news" + slug}
      >
        <div className={classes.style}>
          <ExpandTExt
            date={type}
            title={title || ""}
            description={description || ""}
          />
        </div>
      </Link>
    </div>
  ) : null
}
