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

export const LeftNewsComponent = (props: Props): React.ReactElement => {
  return (
    props.type === "LEFT" && (
      <div>
        <Link
          className={"global-news-left"}
          style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
          to={"/news" + props.slug}
        >
          <div
            style={{
              width: "40%",
              backgroundImage: `url(${props.image})`,
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
  )
}
