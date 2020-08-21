import { Box, Typography, useTheme, Theme } from "@material-ui/core"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import { makeStyles } from "@material-ui/core/styles"
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
      textAlign: "left",
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
    fontFamily: "GSTwo",
    fontWeight: 600,
    lineHeight: "2.2em",
    fontSize: "14px",
    listStyle: "none",
    "@media (min-width:600px)": {
      fontSize: "16px",
    },
  },
}))

function SvgIconccordion(props: { theme: Theme }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        stroke={props.theme.palette.primary.contrastText}
      />
      <rect
        x="7"
        y="3"
        width="2"
        height="10"
        fill={props.theme.palette.primary.contrastText}
      />
      <rect
        x="3"
        y="7"
        width="10"
        height="2"
        fill={props.theme.palette.primary.contrastText}
      />
    </svg>
  )
}

function SvgIconccordionExpanded(props: { theme: Theme }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="15" height="15" fill="#FFCC00" stroke={props.theme.palette.primary.contrastText}/>
    <rect x="3" y="7" width="10" height="2" fill={props.theme.palette.primary.contrastText}/>
    </svg>
  )
}

function NewComponent(props: {
  current: number
  index: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  accordion: { text: string[]; title: string }
}) {
  const theme = useTheme()
  const classes = useStylesAccordion()
  const expanded = props.current === props.index
  return (
    <Accordion
      expanded={expanded}
      onClick={() => props.setCurrent(expanded ? -1 : props.index)}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <SvgIconccordionExpanded theme={theme}/>
          ) : (
            <SvgIconccordion theme={theme} />
          )
        }
      >
        <Typography className={classes.heading}>
          {props.accordion.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <ul className={classes.ul}>
          {props.accordion.text.map((item, index) => (
            <li key={index} className={classes.li}>
              {item}
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  )
}

export const AboutAccordion = (): React.ReactElement => {
  const classes = useStylesAccordion()
  const [current, setCurrent] = React.useState(-1)
  return (
    <React.Fragment>
      <Box lineHeight={3}>
        <Typography className={classes.style}>NOSSAS CAPACIDADES</Typography>
      </Box>
      <div className={classes.div}>
        {accordionData.map((accordion, index) => (
          <NewComponent
            index={index}
            current={current}
            setCurrent={setCurrent}
            key={index}
            accordion={accordion}
          />
        ))}
      </div>
    </React.Fragment>
  )
}
