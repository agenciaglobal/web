import { Drawer, Hidden, Box } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      height: `calc( 100vh - ${400 + 155}px)`,
      zIndex: 0,
      background: "transparent",
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
}): React.ReactElement | null => {
  const classes = useStyles()
  return scrolled ? (
    <Fragment>
      <Hidden smDown>
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <Box
            style={{
              transform: "rotate(-90deg)",
            }}
          >
            <Box
              style={{
                width: 300,
              }}
            >
              <Typography variant={"caption"} noWrap={false} style={{}}>
                ESTRATEGICAMENTE CRIATIVOS--------------------------
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </Hidden>
    </Fragment>
  ) : null
}
export default LeftDrawer
