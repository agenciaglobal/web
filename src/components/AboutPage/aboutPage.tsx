import * as React from "react"
import Grid from "@material-ui/core/Grid"
import { AboutImageGrid } from "./grid_image"
import { AboutAccordion } from "./accordion"
import { AboutTextGrid } from "./grid_text"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { SVGAbout } from "./svg_about"

const useGridStyles = makeStyles(() => ({
  div: { flexGrow: 1, paddingTop: 30 },
  grid: { padding: 0, alignItems: "stretch" },
}))

export const AboutPage = (): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <div className={classes.div}>
      <Grid className={classes.grid} alignItems="center" container>
        <AboutTextGrid />
        <AboutImageGrid />
      </Grid>
      <SVGAbout />
      <AboutAccordion />
    </div>
  )
}
