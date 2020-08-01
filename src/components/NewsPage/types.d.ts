import { MdxFields, MdxFrontmatter } from "../../global"

export type ActualNews = Pick<
  MdxFrontmatter,
  "date" | "title" | "description" | "type" | "image"
>
export type SlugType = Pick<MdxFields, "slug">
export type FinalNews = SlugType & ActualNews
