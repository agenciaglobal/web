import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import { AboutAccordion } from "./accordion"
import { AboutImageGrid } from "./grid_image"
import { AboutTextGrid } from "./grid_text"
import { SVGAbout } from "./svg_about"

const useGridStyles = makeStyles(() => ({
  div: { flexGrow: 1, paddingTop: 30 },
  grid: { padding: 0 },
}))

export const AboutPage = (): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <div className={classes.div}>
      <Grid className={classes.grid} alignItems="center" container spacing={8}>
        <AboutTextGrid />
        <AboutImageGrid />
      </Grid>
      <SVGAbout />
      <AboutAccordion />
    </div>
  )
}
