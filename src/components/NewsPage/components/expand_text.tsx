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
      height: "calc( 100% - 30px )",
      justifyContent: "space-between",
      position: "relative",
    }}
  >
    <Typography
      noWrap={true}
      style={{
        fontSize: "12px",
        fontFamily: "GSTwo",
      }}
    >
      {props.date}
    </Typography>
    <div>
      <Typography
        noWrap={true}
        style={{
          fontSize: "20px",
          lineHeight: "36px",
          fontFamily: "GSThree",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        noWrap={true}
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
