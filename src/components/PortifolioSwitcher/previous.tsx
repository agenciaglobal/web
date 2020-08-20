import { Box, useTheme, Hidden } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { SitePageContextPrevious } from "global"

interface Props {
  previous?: SitePageContextPrevious | null
}

export const Previous = (props: Props): React.ReactElement => {
  const theme = useTheme()
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "33%",
        maxWidth: "33%",
      }}
    >
      {props.previous && (
        <Link
          style={{ textDecoration: "none" }}
          to={`${props.previous.fields?.slug}`}
        >
          <Box
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <svg
              style={{ zIndex: 0, transform: "translateX(10px)" }}
              width="38"
              height="70"
              viewBox="0 0 38 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1.74846e-06 35L37.5 0.358977L37.5 69.641L-1.74846e-06 35Z"
                fill="#FFCC00"
              />
            </svg>
            <Box
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box style={{ zIndex: 2 }}>
                <Typography style={{ 
                  textAlign: "start",
                  color: theme.custom.grey1,
                  fontSize: 15
                  }}>
                  {"TRABALHO ANTERIOR"}
                </Typography>
                <Hidden smDown>
                  <Typography style={{ 
                    textAlign: "start",
                    color: theme.custom.grey1,
                    fontFamily: "GSThree",
                    fontSize: 30
                    }}>
                    {props.previous.frontmatter?.title}
                  </Typography>
                </Hidden>
              </Box>
            </Box>
          </Box>
        </Link>
      )}
    </Box>
  )
}
