import { Box, Typography, makeStyles } from "@material-ui/core"
import * as React from "react"

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "30px",
    color: "#FFF",
    lineHeight: "1.3em",
    fontFamily: "GSThree",
    "@media (max-width:600px)": {
      fontSize: 18,
    },
  },
  subtitle: {
    fontSize: "16px",
    color: "#FFF",
    lineHeight: "1.3em",
    fontFamily: "GSTwo",
    paddingBottom: 15,
    "@media (max-width:600px)": {
      fontSize: 12,
    },
  },
  categorie: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#FFF",
    fontFamily: "Montserrat, sans-serif",
    textTransform: "capitalize",
    alignSelf: "flex-end",
  },
}))

export const ExpandTextHome = (props: {
  style?: React.CSSProperties
  date: string
  full?: boolean
  title: string
  description: string
  categorie: string
}): React.ReactElement => {
  const classes = useStyles()
  return (
    <Box
      style={{
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        height: "calc( 100% - 44px )",
        justifyContent: "space-between",
        position: "relative",
        background: "transparent",
        ...props.style,
      }}
    >
      <div>
        <Typography className={classes.title}>{props.title}</Typography>
        <Typography className={classes.subtitle}>
          {props.description}
        </Typography>
      </div>
      <Typography className={classes.categorie}>{props.categorie}</Typography>
    </Box>
  )
}
