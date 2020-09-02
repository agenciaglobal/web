import { Box, Typography } from "@material-ui/core"
import * as React from "react"

export const RelatedNewsDesktop = (props: {
  style?: React.CSSProperties
  date: string
  full?: boolean
  postType: string
  title: string
  description: string
}): React.ReactElement => {
  return (
    <Box
      style={{
        padding: "20px",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        height: "calc( 100% - 0px )",
        justifyContent: "space-between",
        position: "relative",
        background: "rgba(0, 0, 0, 0.3)",
        ...props.style,
      }}
    >
      <Typography
        noWrap={true}
        style={{
          fontSize: "12px",
          color: "#FFF",
          fontFamily: "GSThree",
          textTransform: "uppercase",
        }}
      >
        {props.date} | {props.postType}
      </Typography>
      <div>
        <Typography
          style={{
            fontSize: "16px",
            color: "#FFF",
            lineHeight: "1.3em",
            fontFamily: "GSThree",
            paddingBottom: 50,
          }}
        >
          {props.title}
        </Typography>
        <Typography
          noWrap={true}
          style={{
            fontSize: "16px",
            color: "#FFF",
            lineHeight: "1.3em",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            paddingBottom: 50,
          }}
        >
          {props.description}
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            style={{
              fontFamily: "GSThree",
              fontSize: 12,
              color: "#FFF",
              paddingRight: 8,
            }}
          >
            LEIA MAIS
          </Typography>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="17.5"
              cy="17.5"
              r="16.5"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M15.0711 11.0002L21.7886 17.7177L14.7175 24.7888"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </Box>
      </div>
    </Box>
  )
}
