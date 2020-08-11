import { Box, Typography } from "@material-ui/core"
import * as React from "react"

export const ExpandTExt = (props: {
  date: string
  title: string
  description: string
}): React.ReactElement => (
  <Box
    style={{
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      height: "-webkit-fill-available",
      justifyContent: "space-between",
      position: "relative",
    }}
  >
    <Typography
      style={{
        fontSize: "12px",
        fontFamily: "GSTwo",
      }}
    >
      {props.date}
    </Typography>
    <div>
      <Typography
        style={{
          fontSize: "20px",
          lineHeight: "36px",
          fontFamily: "GSThree",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        style={{
          fontSize: "16px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {props.description}
      </Typography>
    </div>
  </Box>
)
