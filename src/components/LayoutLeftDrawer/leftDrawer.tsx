import { Drawer, Hidden, Fade } from "@material-ui/core"
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles"
import React, { Fragment } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import logoblack from "static/logo-black.png"
import logo from "static/logo-white.png"
import SideFooter from "components/LayoutFooter/side-footer"

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      background: "transparent",
      height: "100vh",
      width: 120,
      border: "none",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
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
  const theme = useTheme()
  return scrolled ? (
    <Fragment>
      <Hidden smDown>
        <Fade in={scrolled} timeout={1000}>
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <Link style={{ boxShadow: "none" }} to="/">
              <img
                src={theme.themeName === "light" ? logoblack : logo}
                alt="logo-black"
                style={{ margin: "32px 22px", height: 100 }}
              />
            </Link>
            <SideFooter />
          </Drawer>
        </Fade>
      </Hidden>
    </Fragment>
  ) : null
}
export default LeftDrawer
