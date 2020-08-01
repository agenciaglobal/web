import { Box } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { SitePageContextNext } from "../../global"

interface Props {
  next: SitePageContextNext
}

export const Next = (props: Props) => {
  return (
    <Box
      style={{
        ...{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        width: "35%",
      }}
    >
      {props.next && (
        <Link
          style={{ textDecoration: "none" }}
          to={`/portifolio${props.next.fields.slug}`}
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
                <Typography style={{ textAlign: "end" }}>
                  {"PROÓXIMO TRABALHO"}
                </Typography>
                <Typography style={{ textAlign: "end" }}>
                  {props.next === null ? "" : props.next.frontmatter.title}
                </Typography>
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
