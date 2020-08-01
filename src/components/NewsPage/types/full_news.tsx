import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "../components/expand_text"
import { FinalNews } from "../types"
import { useRequireNewImage } from "../shared/useRequireNewImage"

export const FullNewsComponent = ({
  current: { date, description, image, slug, title, type },
}: {
  current: FinalNews
}): React.ReactElement => {
  const imageSrc = useRequireNewImage(image)
  return type === "FULL" ? (
    <div
      className={"global-news-full"}
      style={{
        marginBottom: 30,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <Link style={{ textDecoration: "none" }} to={"/news" + slug}>
        <ExpandTExt date={date} title={title} description={description} />
      </Link>
    </div>
  ) : null
}
