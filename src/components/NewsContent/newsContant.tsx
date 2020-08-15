import Typography from "@material-ui/core/Typography"
import React from "react"
import Box from "@material-ui/core/Box"
import { Maybe, NewsPostBySlugQuery, SitePageContextNews } from "global"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MainTranslatedImage } from "../../templates/portifolio-post"
import makeStyles from "@material-ui/core/styles/makeStyles"

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
const useGridStyles = makeStyles(() => ({
  div: {
    transform: "translateY( -187px )",
    marginTop: 24,
    "& img": {
      maxWidth: "100%",
    },
  },
}))
const notEmpty = <TValue extends unknown>(
  value: TValue | null | undefined,
): value is TValue => value !== null && value !== undefined

export const NewsContent = (props: {
  current: NewsPostBySlugQuery | null | undefined
  news: Maybe<SitePageContextNews>[] | null | undefined
  body: string
}): React.ReactElement => {
  const classes = useGridStyles()
  const gutterVertical = 25
  const post = props.current?.mdx
  return (
    <React.Fragment>
      <MainTranslatedImage
        image={props.current?.mdx?.frontmatter?.image || ""}
      />

      <div className={classes.div}>
        <Typography style={{ display: `block` }}>
          {post?.frontmatter?.date + " | NOTICIA"}
        </Typography>
        <Typography style={{ fontSize: 30 }}>
          {post?.frontmatter?.title}
        </Typography>
        <Box>
          <MDXRenderer>{props.body}</MDXRenderer>
        </Box>
        <Box
          css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}
        >
          <Typography>{"Tags"}</Typography>
          {(post?.frontmatter?.tags || [])
            .filter(notEmpty)
            .map((tag: string, index) => {
              return <Typography key={index}>{tag + " "}</Typography>
            })}
        </Box>
      </div>
    </React.Fragment>
  )
}
