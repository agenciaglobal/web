import { Drawer, isWidthUp, WithWidthProps, Fade } from "@material-ui/core"
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles"
import React, { Fragment } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import logoBlack from "static/logo-black.png"
import logo from "static/logo-white.png"
import SideFooter from "components/LayoutFooter/side-footer"
import withWidth from "@material-ui/core/withWidth"

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      background: "transparent",
      width: 120,
      height: "100%",
      border: "none",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      // paddingBottom: 110,
    },
  }),
)

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  scrolled: boolean
}
const LeftDrawer = withWidth()(
  ({
    scrolled,
    open,
    width,
    setOpen,
  }: Props & WithWidthProps): React.ReactElement | null => {
    const classes = useStyles()
    const isDesktop = isWidthUp("md", width || "xs")
    const theme = useTheme()
    const isVisible = open || scrolled
    return isDesktop ? (
      <Fragment>
        <Drawer
          onMouseEnter={() => {
            console.log("enter")
            setOpen(true)
          }}
          onMouseLeave={() => {
            console.log("leave")
            setOpen(false)
          }}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <Link
            style={{
              visibility: isVisible ? "unset" : "hidden",
              boxShadow: "none",
            }}
            to="/"
          >
            <Fade in={isVisible} timeout={1000}>
              <img
                src={theme.themeName === "light" ? logoBlack : logo}
                alt="logo-black"
                style={{ margin: "32px 22px", height: 100 }}
              />
            </Fade>
          </Link>
          <SideFooter isVisible={isVisible} />
        </Drawer>
      </Fragment>
    ) : null
  },
)
export default LeftDrawer
