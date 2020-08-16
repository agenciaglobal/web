import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import aboutImage from "static/about.png"
import { Theme } from "@material-ui/core"

const useGridStyles = makeStyles((theme: Theme) => ({
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 0,
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  image: {
    maxWidth: "100%",
    objectFit: "cover",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}))

export const AboutImageGrid = (): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <Grid item xs={12} sm={5} className={classes.grid}>
      <img className={classes.image} src={aboutImage} alt="" />
    </Grid>
  )
}
