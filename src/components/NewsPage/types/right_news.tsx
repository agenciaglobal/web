import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import { SlugType } from "../types"
import { SitePageContextNewsNodeFrontmatter } from "global"

interface Props {
  current: SitePageContextNewsNodeFrontmatter & SlugType
}

export const RightNewsComponent = ({
  current: { description, image, slug, title, type },
}: Props): React.ReactElement | null => {
  const imageSrc = image || ""
  return type === "RIGHT" ? (
    <div>
      <Link
        className={"global-news-right"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={slug || ""}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "40%" }} />
          <div
            style={{
              width: "40%",
              // marginLeft: "auto",
              backgroundImage: `url(${imageSrc})`,
            }}
          >
            <ExpandTExt
              type={"Full"}
              date={type}
              title={title || ""}
              description={description || ""}
            />
          </div>
        </div>
      </Link>
    </div>
  ) : null
}
