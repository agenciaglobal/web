import { Box, isWidthDown, WithWidthProps, isWidthUp } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { ExpandTExt } from "./NewsPage/components/expand_text"
import { Maybe, SitePageContextNews } from "global"
import withWidth from "@material-ui/core/withWidth"
import { useExtrapolatedMargin } from "../templates/portifolio-post"

export const useStyles = makeStyles((theme: Theme) => ({
  type: {
    display: "flex",
    marginTop: 40,
    paddingBottom: 40,
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
  },
}))

export const NewsRelatedContent = withWidth()(
  (
    props: {
      news?: Array<Maybe<SitePageContextNews>> | null | undefined
    } & WithWidthProps,
  ): React.ReactElement => {
    const isXS = isWidthDown("xs", props.width || "xs")
    const classes = useStyles()
    const margin = useExtrapolatedMargin({ width: props.width })
    const newVar = props.news || []
    return (
      <Box
        style={{
          transform: `translate( -${margin}px , -${187}px )`,
          width: `calc( 100% + ${2 * margin}px)`,
        }}
        className={classes.type}
      >
        <Box
          style={{
            height: 150,
            paddingLeft: margin,
            paddingRight: margin,
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
        <Box
          style={{
            display: "flex",
            flexDirection: isXS ? "column" : "row",
            paddingLeft: margin,
            paddingRight: margin,
            width: `calc( 100% - ${2 * margin}px)`,
            justifyContent: "space-around",
          }}
        >
          {newVar
            .map((d) => d?.node)
            .filter((_, index) => index < 3)
            .map((el, index) => {
              const image = el?.frontmatter?.image || ""
              return (
                <Box
                  key={index}
                  style={{
                    height: 450,
                    width: isXS ? "100%" : "30%",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={el?.fields?.slug || ""}
                  >
                    <div
                      style={{
                        height: "100%",
                        background: `url(${image})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <ExpandTExt
                        date={el?.frontmatter?.date || ""}
                        title={el?.frontmatter?.title || ""}
                        description={el?.frontmatter?.description || ""}
                      />
                    </div>
                  </Link>
                </Box>
              )
            })}
        </Box>
      </Box>
    )
  },
)
