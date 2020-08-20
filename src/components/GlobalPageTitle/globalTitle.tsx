import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import * as React from "react"

interface Props {
  label: string
}

const useStyles = makeStyles(() => ({
  civ: {
    fontSize: 40,
    paddingTop: 26,
    paddingBottom: 26,
    fontFamily: "GSTwo",
    "@media (min-width:600px)": {
      fontSize: 50,
    },
  },
}))

export const GlobalPageTitle = ({ label }: Props): React.ReactElement => {
  const classes = useStyles()
  return <Typography className={classes.civ}>{label}</Typography>
}
