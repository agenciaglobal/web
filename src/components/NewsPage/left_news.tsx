import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "./full_news"

// const useStylesClose = makeStyles(() => ({}))

interface Props {
  description: string
  date: string
  type: string
  slug: string
  title: string
  require1: string
}

export const LeftNewsComponent = (props: Props): React.ReactElement => {
  // const classes = useStylesClose()
  return (
    <div>
      <Link
        className={"global-news-left"}
        style={{
          height: "100%",
          textDecoration: "none",
          minHeight: 300,
        }}
        to={"/news" + props.slug}
      >
        <div
          style={{
            height: "100%",
            width: "40%",
            marginLeft: props.type === "LEFT" ? "unset" : "auto",
            backgroundImage: `url(${props.require1})`,
          }}
        >
          <ExpandTExt
            date={props.type}
            title={props.title}
            description={props.description}
          />
        </div>
      </Link>
    </div>
  )
}
