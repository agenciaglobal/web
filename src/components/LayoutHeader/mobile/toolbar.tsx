import { AppBar, Hidden } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import logoBlack from "static/logo-black.png"
import logo from "static/logo-white.png"
import mapGlobal from "static/map.png"
import { CloseButton } from "./close"

interface Props {
  lightMode: "light" | "dark"
  onClick: () => void
  open: boolean
  uri: string
}

export const MobileToolbar = (props: Props): React.ReactElement => {
  const isContact = props.uri.includes("/contact")
  return (
    <Hidden mdUp>
      <AppBar
        position="sticky"
        style={{
          height: 155,
          background: "transparent",
          // height: isContact ? 400 : 155,
          // backgroundImage: isContact ? `url(${mapGlobal})` : "unset",
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
          <Link style={{ boxShadow: "none" }} to="/">
            <img
              src={props.lightMode === "light" ? logoBlack : logo}
              alt="logo-black"
              style={{ margin: 16, height: 100 }}
            />
          </Link>
          <CloseButton onClick={props.onClick} open={props.open} />
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}
