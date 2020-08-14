import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import { SlugType } from "components/NewsPage/types"
import { SitePageContextNewsNodeFrontmatter } from "global"
import { useDynamicImageImport } from "components/HomePage/grid"

export const FullNewsComponent = ({
  current: { date, description, image, slug, title, type },
}: {
  current: SitePageContextNewsNodeFrontmatter & SlugType
}): React.ReactElement | null => {
  const imageSrc = image || ""
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
        <ExpandTExt
          date={date || ""}
          title={title || ""}
          description={description || ""}
        />
      </Link>
    </div>
  ) : null
}
