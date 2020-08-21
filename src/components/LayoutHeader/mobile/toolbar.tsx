import { AppBar, Hidden, Fade, useTheme } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import logoBlack from "static/logo-black.png"
import logo from "static/logo-white.png"
import { CloseButton } from "./close"

interface Props {
  lightMode: "light" | "dark"
  onClick: () => void
  open: boolean
  uri: string
  onTop: boolean
}

export const MobileToolbar = (props: Props): React.ReactElement => {
  const theme = useTheme()
  const mode =
    props.uri.includes("/contact") ||
    props.uri.includes("/portifolio") ||
    props.uri.includes("/news/")
      ? theme.themeName === "light"
        ? "dark"
        : "light"
      : theme.themeName
  return (
    <Hidden mdUp>
      <AppBar
        position="sticky"
        style={{
          height: 155,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "none",
          }}
        >
          <Fade in={!props.onTop} timeout={600}>
            <Link style={{ boxShadow: "none" }} to="/">
              <img
                src={mode === "light" ? logoBlack : logo}
                alt="logo-black"
                style={{ margin: 16, height: 100 }}
              />
            </Link>
          </Fade>
          <CloseButton onClick={props.onClick} open={props.open} />
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}
