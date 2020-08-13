import { Box, Typography } from "@material-ui/core"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import { makeStyles } from "@material-ui/core/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import * as React from "react"
import { accordionData } from "./accordion_date"

const useStylesAccordion = makeStyles((theme) => ({
  heading: {
    fontSize: "16px",
    "@media (min-width:600px)": {
      fontSize: "22px",
    },
    fontWeight: theme.typography.fontWeightRegular,
  },
  style: {
    fontFamily: "GSThree",
    textAlign: "center",
    fontSize: "24px",
    lineHeight: "30px",
    paddingTop: 100,
    "@media (min-width:600px)": {
      fontSize: "50px",
      lineHeight: "50px",
    },
  },
  div: {
    width: "100%",
    paddingBottom: 40,
    paddingTop: 30,
  },
  details: {
    "@media (min-width:600px)": {
      padding: "0px 56px",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  ul: {
    margin: 0,
    padding: 0,
    "@media (min-width:600px)": {
      transform: "translateY(-54px)",
      textAlign: "right",
    },
  },
  li: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    lineHeight: "2.2em",
    fontSize: "14px",
    listStyle: "none",
    "@media (min-width:600px)": {
      fontSize: "16px",
    },
  },
}))

export const AboutAccordion = (): React.ReactElement => {
  const classes = useStylesAccordion()
  return (
    <React.Fragment>
      <Box lineHeight={3}>
        <Typography className={classes.style}>NOSSAS CAPACIDADES</Typography>
      </Box>
      <div className={classes.div}>
        {accordionData.map((d, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{d.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <ul className={classes.ul}>
                {d.text.map((item, index) => (
                  <li key={index} className={classes.li}>
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </React.Fragment>
  )
}
