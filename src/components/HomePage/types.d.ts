import { Maybe, MdxFrontmatter } from "../../global"

export type Portifolio = { slug: string } & Maybe<
  Pick<MdxFrontmatter, "image" | "date" | "title" | "description" | "categorie">
>
