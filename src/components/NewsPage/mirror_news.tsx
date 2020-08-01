import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "./full_news"

interface Props {
  description: string
  date: string
  type: string
  slug: string
  title: string
  image: string
}

const useStyles = makeStyles((theme: Theme) => ({
  style: {
    border: "3px solid",
    borderColor: theme.palette.primary.contrastText,
    width: "45%",
  },
  lag: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

export const MirrorNewsComponent = (props: Props): React.ReactElement => {
  const classes = useStyles()
  return (
    props.type === "MIRROR" && (
      <div>
        <Link
          className={"global-news-mirror"}
          style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
          to={"/news" + props.slug}
        >
          <div className={classes.lag}>
            <div
              style={{
                display: "grid",
                backgroundImage: `url(${props.image})`,
              }}
              className={classes.style}
            >
              <ExpandTExt
                date={props.type}
                title={props.title}
                description={props.description}
              />
            </div>
            <div
              style={{
                display: "grid",
              }}
              className={classes.style}
            >
              <ExpandTExt
                date={props.type}
                title={props.title}
                description={props.description}
              />
            </div>
          </div>
        </Link>
      </div>
    )
  )
}
