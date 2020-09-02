import { Box, isWidthDown, WithWidthProps } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { Maybe, SitePageContextNews } from "global"
import withWidth from "@material-ui/core/withWidth"
import { useExtrapolatedMargin } from "../../templates/portifolio-post"
import { RelatedNewsDesktop } from "./RelatedNewsDesktop"
import { RelatedNewsMobile } from "./RelatedNewsMobile"

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
            height: isXS ? 100 : 120,
            paddingLeft: margin,
            paddingRight: margin,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            // marginLeft: 24,
          }}
        >
          <Typography
            noWrap={false}
            style={{
              fontFamily: "GSThree",
              fontSize: isXS ? 20 : 30,
              color: "#000",
            }}
          >
            Conteúdo Relacionado
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: isXS ? "column" : "row",
            paddingLeft: margin,
            paddingRight: margin,
            width: "100%",
            // width: `calc( 100% - ${2 * margin}px)`,
            justifyContent: isXS ? "unset" : "space-between",
          }}
        >
          {newVar
            .map((d) => d?.node)
            .filter((_, index) => index < 3)
            .map((el, index) => {
              console.log("yaya")
              console.log(el)
              const image = el?.frontmatter?.image || ""
              return (
                <Box
                  key={index}
                  style={{
                    width: isXS ? "100%" : "27%",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      marginBottom: 20,
                    }}
                    to={el?.fields?.slug || ""}
                  >
                    <div
                      style={{
                        height: !isXS ? "70vh" : "auto",
                        // paddingBottom: !isXS ? 0 : "60%",
                        width: !isXS ? "100%" : "50%",
                        background: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center ",
                      }}
                    >
                      {!isXS && (
                        <RelatedNewsDesktop
                          postType={el?.frontmatter?.postType || ""}
                          date={el?.frontmatter?.date || ""}
                          title={el?.frontmatter?.title || ""}
                          description={el?.frontmatter?.description || ""}
                        />
                      )}
                    </div>
                    {isXS && (
                      <div
                        style={{
                          height: "100%",
                          width: !isXS ? "100%" : "50%",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <RelatedNewsMobile
                          postType={el?.frontmatter?.postType || ""}
                          date={el?.frontmatter?.date || ""}
                          title={el?.frontmatter?.title || ""}
                          description={el?.frontmatter?.description || ""}
                        />
                      </div>
                    )}
                  </Link>
                </Box>
              )
            })}
        </Box>
      </Box>
    )
  },
)
