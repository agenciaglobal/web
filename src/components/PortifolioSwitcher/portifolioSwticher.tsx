import { Box, isWidthUp, WithWidthProps } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import React from "react"
import { SitePageContextNext, SitePageContextPrevious } from "global"
import { Center } from "./center"
import { Next } from "./next"
import { Previous } from "./previous"
import withWidth from "@material-ui/core/withWidth"
import { useExtrapolatedMargin } from "../../templates/portifolio-post"

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
    justifyContent: `space-around`,
    listStyle: `none`,
    padding: 0,
  },
}))

export const PortifolioSwitcher = withWidth()(
  (props: Props & WithWidthProps): React.ReactElement => {
    const classes = useStyles()

    const margin = useExtrapolatedMargin({ width: props.width })
    return (
      <Box
        className={classes.style}
        style={{
          width: `calc( 100% + ${2 * margin}px)`,
          transform: `translate( -${margin}px , ${0}px )`,
        }}
      >
        <Previous previous={props.previous} />
        <Center />
        <Next next={props.next} />
      </Box>
    )
  },
)
