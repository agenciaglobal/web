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
}))

export const AboutAccordion = (): React.ReactElement => {
  const classes = useStylesAccordion()
  return (
    <div style={{ width: "100%", paddingBottom: 100, paddingTop: 100 }}>
      {accordionData.map((d, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{d.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{d.text}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
