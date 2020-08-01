import { Box } from "@material-ui/core"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"

export const Center = (): React.ReactElement => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="13" height="13" fill="#666666" />
          <rect x="20" width="13" height="13" fill="#666666" />
          <rect y="20" width="13" height="13" fill="#666666" />
          <rect x="20" y="20" width="13" height="13" fill="#666666" />
        </svg>
      </Link>
    </Box>
  )
}
