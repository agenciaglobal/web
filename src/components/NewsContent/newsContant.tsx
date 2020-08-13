import Typography from "@material-ui/core/Typography"
import React from "react"
import Box from "@material-ui/core/Box"
import { Maybe, NewsPostBySlugQuery, SitePageContextNews } from "global"
import { MDXRenderer } from "gatsby-plugin-mdx"

export function LongMontsetrratText(props: {
  post: string | null | undefined
}): JSX.Element {
  return (
    <Typography
      style={{
        fontWeight: 300,
        fontSize: 20,
        color: "#333333",
        lineHeight: "32px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {props.post}
    </Typography>
  )
}

export const NewsContent = (props: {
  current: NewsPostBySlugQuery | null | undefined
  news: Maybe<SitePageContextNews>[] | null | undefined
  body: string
}): React.ReactElement => {
  const gutterVertical = 25
  const post = props.current?.mdx
  return (
    <React.Fragment>
      <Typography style={{ display: `block` }}>
        {post?.frontmatter?.date + " | NOTICIA"}
      </Typography>
      <Typography style={{ fontSize: 30 }}>
        {post?.frontmatter?.title}
      </Typography>
      <MDXRenderer>{props.body}</MDXRenderer>
      <Box css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}>
        <Typography>{"Tags"}</Typography>
        {post?.frontmatter?.tags?.map((tag: string, index) => {
          return <React.Fragment key={index}>{tag + " "}</React.Fragment>
        })}
      </Box>
    </React.Fragment>
  )
}
