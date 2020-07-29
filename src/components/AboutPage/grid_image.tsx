import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import aboutImage from "../../../static/about.png"

const useGridStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    padding: 0,
  },
  image: {
    maxWidth: "100%",
    objectFit: "cover",
    padding: 0,
  },
}))

export const AboutImageGrid = (): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <Grid item xs={12} sm={4} className={classes.grid}>
      <img className={classes.image} src={aboutImage} alt="" />
    </Grid>
  )
}
