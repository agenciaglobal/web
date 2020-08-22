import makeStyles from "@material-ui/core/styles/makeStyles"
import {Box, Theme } from "@material-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const useGridStyles = makeStyles((theme: Theme) => ({
  div: {
    maxWidth: "100%",
    "& img": {
      width: "100%",
      margin: 0
    },
    "& *": {
      fontWeight: 300,
      fontSize: 16,
      color: theme.custom.grey1,
      lineHeight: "32px",
      margin: "16px 0px",
      fontFamily: "Montserrat, sans-serif"
    },  
  },
}))

export const MarkDownRendererNews = (props: {
  body: string
}): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <Box className={classes.div}>
      <MDXRenderer>{props.body}</MDXRenderer>
    </Box>
  )
}
