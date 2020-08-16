import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import { SlugType } from "components/NewsPage/types"
import { SitePageContextNewsNodeFrontmatter } from "global"

export const FullNewsComponent = ({
  force = false,
  current: { date, description, image, slug, title, type },
}: {
  force?: boolean
  current: SitePageContextNewsNodeFrontmatter & SlugType
}): React.ReactElement | null => {
  const imageSrc = image || ""
  return type === "FULL" || force ? (
    <div
      className={"global-news-full"}
      style={{
        marginBottom: 30,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <Link style={{ textDecoration: "none" }} to={slug || ""}>
        <ExpandTExt
          date={date || ""}
          title={title || ""}
          description={description || ""}
        />
      </Link>
    </div>
  ) : null
}
