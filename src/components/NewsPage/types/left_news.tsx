import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "../components/expand_text"
import { useRequireNewImage } from "../shared/useRequireNewImage"
import { SlugType } from "../types"
import { SitePageContextNewsNodeFrontmatter } from "../../../global"

interface Props {
  current: SitePageContextNewsNodeFrontmatter & SlugType
}

export const LeftNewsComponent = ({
  current: { description, image, slug, title, type },
}: Props): React.ReactElement | null => {
  const imageSrc = useRequireNewImage(image || "")
  return type === "LEFT" ? (
    <div>
      <Link
        className={"global-news-left"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={"/news" + slug}
      >
        <div
          style={{
            width: "40%",
            display: "block",
            backgroundImage: `url(${imageSrc})`,
          }}
        >
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
