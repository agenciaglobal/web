import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import { SlugType } from "components/NewsPage/types"
import { SitePageContextNewsNodeFrontmatter } from "global"

export const FullNewsComponent = ({
  force = false,
  current: { date, description, image, slug, title, type, postType },
}: {
  force?: boolean
  current: SitePageContextNewsNodeFrontmatter & SlugType
}): React.ReactElement | null => {
  const imageSrc = image || ""
  return type === "FULL" || force ? (
    <div
      className={"global-news-full"}
      style={{
        // marginBottom: 30,
        width: "100%",
        height: 0,
        paddingBottom: "100%",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        to={slug || ""}
      >
        <ExpandTExt
          postType={postType || ""}
          date={date || ""}
          title={title || ""}
          description={description || ""}
        />
      </Link>
    </div>
  ) : null
}
