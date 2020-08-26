import { makeStyles, Theme, Typography } from "@material-ui/core"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
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

export const QuoteNewsComponent = ({
  current: { quote, slug, type },
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
          <div
            style={{ display: "flex", alignItems: "center" }}
            className={classes.style}
          >
            <div style={{ padding: 15, width: "calc(100% - 30px)" }}>
              <div style={{ height: 40 }}></div>
              <Typography
                style={{
                  fontFamily: "GSThree",
                  fontSize: 28,
                }}
              >
                {quote || ""}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ) : null
}
