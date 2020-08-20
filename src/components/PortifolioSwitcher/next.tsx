import { Box, useTheme, Hidden } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { SitePageContextNext } from "global"

interface Props {
  next?: SitePageContextNext | null
}

export const Next = (props: Props): React.ReactElement => {
  const theme = useTheme()
  return (
    <Box
      style={{
        ...{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        minWidth: "33%",
        maxWidth: "33%",
      }}
    >
      {props.next && (
        <Link
          style={{ textDecoration: "none" }}
          to={`${props.next.fields?.slug}`}
        >
          <Box
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box style={{ zIndex: 2 }}>
                <Typography
                  style={{
                    textAlign: "end",
                    color: theme.custom.grey1,
                    fontSize: 15,
                  }}
                >
                  {"PRÓXIMO TRABALHO"}
                </Typography>
                <Hidden smDown>
                  <Typography
                    style={{
                      textAlign: "end",
                      color: theme.custom.grey1,
                      fontFamily: "GSThree",
                      fontSize: 30,
                    }}
                  >
                    {props.next.frontmatter?.title}
                  </Typography>
                </Hidden>
              </Box>
            </Box>
            <svg
              style={{ zIndex: 0, transform: "translateX(-10px)" }}
              width="38"
              height="70"
              viewBox="0 0 38 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38 35L0.500001 69.641L0.500004 0.35898L38 35Z"
                fill="#FFCC00"
              />
            </svg>
          </Box>
        </Link>
      )}
    </Box>
  )
}
