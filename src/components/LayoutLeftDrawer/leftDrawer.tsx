import { Drawer, Hidden, Box } from "@material-ui/core"
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles"
import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-plugin-react-i18next"
import logoblack from "static/logo-black.png"
import logo from "static/logo-white.png"

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
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <Link style={{ boxShadow: "none" }} to="/">
            <img
              src={theme.themeName === "light" ? logoblack : logo}
              alt="logo-black"
              style={{ margin: "32px 18px", height: 100 }}
            />
          </Link>
          <Box
            style={{
              transform: "rotate(-90deg)",
            }}
          >
            <Box
              style={{
                width: 300,
                margin: "0px 200px 26px",
                display: "flex",

              }}
            >
              <Typography variant={"caption"} noWrap={false} style={{}}>
                ESTRATEGICAMENTE CRIATIVOS
              </Typography>
              <div
                style={{
                  margin: "9px",
                  height: 1,
                  width: 100,
                  background: theme.palette.primary.contrastText
                }}
              />
            </Box>
          </Box>
        </Drawer>
      </Hidden>
    </Fragment>
  ) : null
}
export default LeftDrawer
