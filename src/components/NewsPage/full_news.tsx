import { Box, Typography } from "@material-ui/core"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"

export function ExpandTExt(props: {
  date: string
  title: string
  description: string
}): React.ReactElement {
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
  image: string
  slug: string
  type: string
  title: string
  description: string
  date: string
}): React.ReactElement =>
  props.type === "FULL" ? (
    <div
      className={"global-news-full"}
      style={{
        marginBottom: 30,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${props.image})`,
      }}
    >
      <Link style={{ textDecoration: "none" }} to={"/news" + props.slug}>
        <ExpandTExt
          date={props.date}
          title={props.title}
          description={props.description}
        />
      </Link>
    </div>
  ) : null
