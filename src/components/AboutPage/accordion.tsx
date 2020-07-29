import { Typography } from "@material-ui/core"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import { makeStyles } from "@material-ui/core/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import * as React from "react"
import { accordionData } from "./accordion_date"

const useStylesAccordion = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  div: { width: "100%", paddingBottom: 100, paddingTop: 100 },
}))

export const AboutAccordion = (): React.ReactElement => {
  const classes = useStylesAccordion()
  return (
    <div className={classes.div}>
      {accordionData.map((d, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{d.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{d.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
