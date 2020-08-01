import { Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import ScrollMenu from "react-horizontal-scrolling-menu"
import { Maybe, SitePageContextNews } from "../global"
import { ExpandTExt } from "./NewsPage/components/expand_text"

export const useStyles = makeStyles((theme: Theme) => ({
  type: {
    display: "flex",
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
    height: 660,
  },
}))
export const RelatedContent = (props: {
  news: Array<Maybe<SitePageContextNews>>
}): React.ReactElement => {
  const classes = useStyles()
  return (
    <Box className={classes.type}>
      <Box
        style={{
          height: 150,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: 24,
        }}
      >
        <Typography variant={"h2"} noWrap={false} style={{ fontSize: 30 }}>
          Conteúdo Relacionado
        </Typography>
      </Box>
      <ScrollMenu
        alignCenter={false}
        data={props.news
          .map((d) => d.node)
          .map((el, index) => {
            /* eslint-disable  @typescript-eslint/no-var-requires */
            const image = require("../../content/" + el.frontmatter.image)
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={index}
                to={"/news" + el.fields.slug}
              >
                <div
                  className={`menu-item`}
                  style={{ background: `url(${image})` }}
                >
                  <ExpandTExt
                    date={el.frontmatter.date}
                    title={el.frontmatter.title}
                    description={el.frontmatter.description}
                  />
                </div>
              </Link>
            )
          })}
      />
    </Box>
  )
}
