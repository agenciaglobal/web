import { Box, Typography } from "@material-ui/core"
import * as React from "react"

export const RelatedNewsMobile = (props: {
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
        paddingLeft: "15px",
        // maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        position: "relative",
        background: "transparent",
        ...props.style,
      }}
    >
      <Typography
        noWrap={true}
        style={{
          fontSize: "12px",
          lineHeight: "14px",
          color: "#000",
          fontFamily: "GSThree",
          textTransform: "uppercase",
          paddingTop: 2,
          paddingBottom: 8,
        }}
      >
        {props.date} | {props.postType}
      </Typography>
      <div>
        <Typography
          style={{
            fontSize: "14px",
            color: "#000",
            lineHeight: "1.3em",
            fontFamily: "GSThree",
            paddingBottom: 16,
          }}
        >
          {props.title}
        </Typography>
        <Typography
          noWrap={true}
          style={{
            fontSize: "12px",
            color: "#000",
            lineHeight: "1.3em",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            paddingBottom: 16,
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
              color: "rgba(0, 0, 0, 0.6)",
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
              stroke="rgba(0, 0, 0, 0.6)"
              strokeWidth="2"
            />
            <path
              d="M15.0711 11.0002L21.7886 17.7177L14.7175 24.7888"
              stroke="rgba(0, 0, 0, 0.6)"
              strokeWidth="2"
            />
          </svg>
        </Box>
      </div>
    </Box>
  )
}
