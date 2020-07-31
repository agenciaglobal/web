import { Box, Typography } from "@material-ui/core"
import * as React from "react"

export function ExpandTExt(props: {
  date: string
  title: string
  description: string
}) {
  return (
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
            fontFamily: "Montserrat",
          }}
        >
          {props.description}
        </Typography>
      </div>
    </Box>
  )
}

export const FullNewsComponent = (props: {
  onClick: () => Promise<void>
  require1: any
  title: string
  description: string
  date: string
}) => (
  <div
    onClick={props.onClick}
    style={{
      marginBottom: 30,
      height: 350,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${props.require1})`,
    }}
  >
    <ExpandTExt
      date={props.date}
      title={props.title}
      description={props.description}
    />
  </div>
)
