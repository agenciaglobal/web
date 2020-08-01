import { Maybe, Mdx, MdxFrontmatter, SitePageContextNews } from "../../global"

export interface Props {
  news: Maybe<Array<Maybe<SitePageContextNews>>>
  current: Maybe<
    Pick<Mdx, "id" | "excerpt" | "body"> & {
      frontmatter?: Maybe<
        Pick<MdxFrontmatter, "title" | "date" | "description" | "image">
      >
    }
  >
}
