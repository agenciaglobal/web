import { Typography, Theme, WithWidthProps } from "@material-ui/core"
import React from "react"
import Box from "@material-ui/core/Box"
import { Maybe, NewsPostBySlugQuery, SitePageContextNews } from "global"
import makeStyles from "@material-ui/core/styles/makeStyles"
import withWidth from "@material-ui/core/withWidth"
import { useExtrapolatedMargin } from "src/templates/portifolio-post"
import { MarkDownRendererNews } from "components/MarkDownRenderer/markDownRendererNews"

export function LongMontsetrratText(props: {
  post: string | null | undefined
}): React.ReactElement {
  const classes = useGridStyles()
  return <Typography className={classes.longText}>{props.post}</Typography>
}

const useGridStyles = makeStyles((theme: Theme) => ({
  div: {
    overflowX: "hidden",
    transform: "translateY( -187px )",
    marginTop: 24,
    "& img": {
      maxWidth: "100%",
    },
  },
  dateText: {
    color: theme.custom.grey1,
    display: "block",
    fontFamily: "GSThree",
    fontSize: 14,
    paddingBottom: 0,
    "@media (min-width:600px)": {
      fontSize: 16,
      paddingBottom: 4,
    },
  },
  authorText: {
    color: theme.custom.grey1,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 300,
    fontSize: 12,
    "@media (min-width:600px)": {
      fontSize: 14,
    },
  },
  titleText: {
    color: theme.custom.grey1,
    fontFamily: "GSThree",
    fontSize: 20,
    paddingTop: 13,
    "@media (min-width:600px)": {
      fontSize: 30,
      paddingTop: 32,
    },
  },
  longText: {
    fontWeight: 300,
    fontSize: 16,
    color: theme.custom.grey1,
    lineHeight: "32px",
    margin: "16px 0px",
    fontFamily: "Montserrat, sans-serif",
    "@media (min-width:600px)": {
      margin: 60,
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    // marginTop:'30'
  },
  other: {
    color: theme.custom.grey1,
    fontFamily: "GSThree",
    fontWeight: 300,
    fontSize: 12,
    "@media (min-width:600px)": {
      fontSize: 14,
    },
  },
  other2: {
    color: theme.custom.grey1,
    fontFamily: "GSThree",
    fontSize: 16,
    "@media (min-width:600px)": {
      fontSize: 30,
    },
  },
  tag: {
    paddingRight: 6,
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "italic",
    color: theme.custom.greyAlpha,
    textDecorationLine: "underline",
  },
}))

const notEmpty = <TValue extends unknown>(
  value: TValue | null | undefined,
): value is TValue => value !== null && value !== undefined

const TranslatedImage = withWidth()(
  (
    props: {
      image: string
      title?: React.ReactElement
    } & WithWidthProps,
  ): React.ReactElement => {
    const margin = useExtrapolatedMargin({ width: props.width })
    return (
      <Box
        css={{
          minHeight: 250,
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          width: `calc( 100% + ${2 * margin}px)`,
          transform: `translate( -${margin}px , -${187}px )`,
        }}
      >
        {props.title}
      </Box>
    )
  },
)

export const NewsContent = (props: {
  current: NewsPostBySlugQuery | null | undefined
  news: Maybe<SitePageContextNews>[] | null | undefined
  body: string
}): React.ReactElement => {
  const classes = useGridStyles()
  const gutterVertical = 25
  const post = props.current?.mdx
  const author = props.current?.mdx?.frontmatter?.author
  return (
    <React.Fragment>
      <TranslatedImage image={props.current?.mdx?.frontmatter?.image || ""} />

      <div className={classes.div}>
        <Typography className={classes.dateText}>
          {post?.frontmatter?.date + " | " + post?.frontmatter?.postType}
        </Typography>
        <Typography className={classes.authorText}>
          {"Por " + author}
        </Typography>
        <Typography className={classes.titleText}>
          {post?.frontmatter?.title}
        </Typography>
        <MarkDownRendererNews body={props.body} />
        <Box
          style={{ display: "flex" }}
          css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}
        >
          <Typography style={{ paddingRight: 6, fontFamily: "GSThree" }}>
            {"Tags: "}
          </Typography>
          {(post?.frontmatter?.tags || [])
            .filter(notEmpty)
            .map((tag: string, index) => {
              return (
                <Typography className={classes.tag} key={index}>
                  {tag}
                </Typography>
              )
            })}
        </Box>

        {/* TEM QUE PUXAR OS CAMPOS DO CMS: IMAGE, AUTHOR E ABOUT */}
        {/* ESSE COMPONENTE SÓ DEVE SER EXIBIDO SE O postType = "artigo" */}
        {props.current?.mdx?.frontmatter?.postType === "article" &&
          author &&
          author !== "" && (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box style={{ maxHeight: 290, maxWidth: 290, margin: 8 }}>
                <img src={post?.frontmatter?.author_image} alt="about" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 400,
                  marginLeft: 8,
                }}
              >
                <Typography className={classes.other}>Escrito por</Typography>
                <Typography className={classes.other2}>
                  {author || ""}
                </Typography>
                <Typography className={classes.authorText}>
                  {post?.frontmatter?.about}
                </Typography>
              </Box>
            </Box>
          )}
      </div>
    </React.Fragment>
  )
}
