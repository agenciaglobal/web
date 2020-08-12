import { Maybe, Mdx, MdxFrontmatter } from "../../global"
import { New } from "../../templates/news-post"

export interface Props {
  news?: New[] | null | undefined
  current?: Maybe<
    Pick<Mdx, "id" | "excerpt" | "body"> & {
      frontmatter?: Maybe<
        Pick<MdxFrontmatter, "title" | "date" | "description" | "image">
      >
    }
  >
}
