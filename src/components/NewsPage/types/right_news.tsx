import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "../components/expand_text"
import { FinalNews } from "../types"
import { useRequireNewImage } from "../shared/useRequireNewImage"

interface Props {
  current: FinalNews
}

export const RightNewsComponent = ({
  current: { description, image, slug, title, type },
}: Props): React.ReactElement => {
  const imageSrc = useRequireNewImage(image)
  return (
    type === "RIGHT" && (
      <div>
        <Link
          className={"global-news-right"}
          style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
          to={"/news" + slug}
        >
          <div
            style={{
              display: "block",
              width: "40%",
              marginLeft: "auto",
              backgroundImage: `url(${imageSrc})`,
            }}
          >
            <ExpandTExt date={type} title={title} description={description} />
          </div>
        </Link>
      </div>
    )
  )
}
