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
    height: "100%",
    width: "40%",
    marginLeft: "auto",
  },
}))

export const QuoteNewsComponent = (props: Props): React.ReactElement => {
  const classes = useStyles()
  return (
    props.type === "QUOTE" && (
      <div>
        <Link
          className={"global-news-quote"}
          style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
          to={"/news" + props.slug}
        >
          <div className={classes.style}>
            <ExpandTExt
              date={props.type}
              title={props.title}
              description={props.description}
            />
          </div>
        </Link>
      </div>
    )
  )
}
