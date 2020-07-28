import { Drawer, Hidden } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import React, { Fragment } from "react"

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      height: "calc( 100vh - 155px )",
      marginTop: 155,
      // background: theme.palette.primary.main,
      width: 120,
      border: "none",
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: 110,
    },
  }),
)

const LeftDrawer = ({
  scrolled,
}: {
  scrolled: boolean
}): React.ReactElement => {
  const classes = useStyles()

  return (
    scrolled && (
      <Fragment>
        <Hidden smDown>
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div>??</div>
          </Drawer>
        </Hidden>
      </Fragment>
    )
  )
}
export default LeftDrawer
