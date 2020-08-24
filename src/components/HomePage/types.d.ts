import { Maybe, MdxFrontmatter } from "global"

export type Portifolio = { slug: string } & Maybe<
  Pick<
    MdxFrontmatter,
    "video" | "cover_image" | "date" | "title" | "description" | "categorie"
  >
>
