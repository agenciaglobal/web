import { Box } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import React from "react"
import { SitePageContextNext, SitePageContextPrevious } from "global"
import { Center } from "./center"
import { Next } from "./next"
import { Previous } from "./previous"

interface Props {
  previous?: SitePageContextPrevious | null
  next?: SitePageContextNext | null
}

const useStyles = makeStyles(() => ({
  style: {
    display: `flex`,
    backgroundColor: "#F1F1F1",
    flexWrap: `wrap`,
    height: 155,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0,
  },
}))

export const PortifolioSwitcher = (props: Props): React.ReactElement => {
  const classes = useStyles()
  return (
    <Box className={classes.style}>
      <Previous previous={props.previous} />
      <Center />
      <Next next={props.next} />
    </Box>
  )
}
