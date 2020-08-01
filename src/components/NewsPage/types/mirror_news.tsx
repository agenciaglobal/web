import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "../components/expand_text"
import { FinalNews } from "../types"
import { useRequireNewImage } from "../shared/useRequireNewImage"

interface Props {
  current: FinalNews
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

export const MirrorNewsComponent = (x: Props): React.ReactElement => {
  const props = x.current
  const classes = useStyles()
  const imageSrc = useRequireNewImage(x.current.image)
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
                backgroundImage: `url(${imageSrc})`,
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
