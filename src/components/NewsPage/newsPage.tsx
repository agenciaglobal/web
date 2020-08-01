import * as React from "react"
import { useMemo } from "react"
import Masonry from "react-masonry-css"
import { Maybe, Mdx, MdxFields, MdxFrontmatter } from "../../global"
import News from "../../pages/news"
import { FullNewsComponent } from "./full_news"
import { HalfNewsComponent } from "./half_news"
import { LeftNewsComponent } from "./left_news"
import { MirrorNewsComponent } from "./mirror_news"
import { QuoteNewsComponent } from "./quote_news"
import { RightNewsComponent } from "./right_news"

type ActualNews = Pick<
  MdxFrontmatter,
  "date" | "title" | "description" | "type" | "image"
>

type SlugType = Pick<MdxFields, "slug">

type News = {
  node: Pick<Mdx, "excerpt"> & {
    fields?: Maybe<SlugType>
    frontmatter?: Maybe<ActualNews>
  }
}

export type FinalNews = SlugType & ActualNews

interface Props {
  news: Array<News>
}

const callbackfn: (news: FinalNews, index: number) => React.ReactElement = (
  xxx,
  index,
) => {
  const imageSrc = useMemo(
    /* eslint-disable  @typescript-eslint/no-var-requires */
    () => require("../../../content/" + xxx.image),
    [xxx.image],
  )
  console.log(xxx.date, xxx.title, xxx.type)
  return xxx.type === "HALF" ? (
    <HalfNewsComponent key={index} current={xxx} />
  ) : xxx.type === "MIRROR" ? (
    <MirrorNewsComponent
      key={index}
      image={imageSrc}
      type={xxx.type}
      slug={xxx.slug}
      title={xxx.title}
      description={xxx.description}
      date={xxx.date + " | NOTÍCIA"}
    />
  ) : xxx.type === "FULL" ? (
    <FullNewsComponent
      key={index}
      type={xxx.type}
      image={imageSrc}
      slug={xxx.slug}
      title={xxx.title}
      description={xxx.description}
      date={xxx.date + " | NOTÍCIA"}
    />
  ) : xxx.type === "QUOTE" ? (
    <QuoteNewsComponent
      key={index}
      type={xxx.type}
      slug={xxx.slug}
      title={xxx.title}
      date={xxx.date + " | NOTÍCIA"}
      description={xxx.description}
      image={imageSrc}
    />
  ) : xxx.type === "LEFT" ? (
    <LeftNewsComponent
      key={index}
      type={xxx.type}
      slug={xxx.slug}
      title={xxx.title}
      date={xxx.date + " | NOTÍCIA"}
      description={xxx.description}
      image={imageSrc}
    />
  ) : (
    <RightNewsComponent
      key={index}
      type={xxx.type}
      slug={xxx.slug}
      title={xxx.title}
      date={xxx.date + " | NOTÍCIA"}
      description={xxx.description}
      image={imageSrc}
    />
  )
}

export const NewsPage = ({ news }: Props): React.ReactElement => {
  console.log(news)
  const map = news.map((f) => ({
    ...f.node.frontmatter,
    slug: f.node.fields.slug,
  }))
  return (
    <Masonry
      breakpointCols={{ default: 2, 700: 1 }}
      className="global-news-grid"
      columnClassName="global-news-grid-column"
    >
      {map.map(callbackfn)}
    </Masonry>
  )
}
