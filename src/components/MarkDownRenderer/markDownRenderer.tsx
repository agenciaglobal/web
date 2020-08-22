import makeStyles from "@material-ui/core/styles/makeStyles"
import Box from "@material-ui/core/Box"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const useGridStyles = makeStyles(() => ({
  div: {
    maxWidth: "100%",
    "& img": {
      width: "100%",
    },
    "& *": {
      fontFamily: "Montserrat, sans-serif",
    },
  },
}))

export const MarkDownRenderer = (props: { body: string }) => {
  const classes = useGridStyles()
  return (
    <Box className={classes.div}>
      <MDXRenderer>{props.body}</MDXRenderer>
    </Box>
  )
}
