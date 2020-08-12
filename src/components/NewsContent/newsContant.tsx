import Typography from "@material-ui/core/Typography"
import React from "react"
import Box from "@material-ui/core/Box"
import { Fullmage } from "../../templates/portifolio-post"
import { New } from "../../templates/news-post"
import { NewsPostBySlugQuery } from "../../global"

function useImage(image: string | null | undefined) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let result = ""
  if (image !== null) {
    if (image !== undefined) {
      if (image !== "") {
        result = require("../../../content/" + image)
      }
    }
  }
  return result
}

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
        fontFamily: "Montserrat",
      }}
    >
      {props.post}
    </Typography>
  )
}

export const NewsContent = (props: {
  current: NewsPostBySlugQuery | null | undefined
  news: New[] | null | undefined
}): React.ReactElement => {
  const gutterVertical = 25
  const post = props.current?.mdx
  return (
    <React.Fragment>
      <Typography style={{ display: `block` }}>
        {post?.frontmatter?.date + " | NOTICIA"}
      </Typography>
      <Typography
        style={{
          fontSize: 30,
        }}
      >
        {post?.frontmatter?.title}
      </Typography>
      <Box css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}>
        <LongMontsetrratText post={post?.frontmatter?.text_1} />
      </Box>
      <Fullmage paddingTop={24} image={useImage(post?.frontmatter?.image)} />
      <Box css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}>
        <LongMontsetrratText post={post?.frontmatter?.text_2} />
      </Box>
      <Box css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}>
        <Typography>{"Tags"}</Typography>
        {post?.frontmatter?.tags?.map((tag: string, index) => {
          return <React.Fragment key={index}>{tag + " "}</React.Fragment>
        })}
      </Box>
    </React.Fragment>
  )
}
