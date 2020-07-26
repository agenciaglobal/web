import { Container, Hidden } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import logo from "../../../../static/logo-white.png"
import logoBlack from "../../../../static/logo-black.png"
import React from "react"
import { CloseButton } from "./close"

export const useStylesHeader = makeStyles((theme: Theme) => ({
  mobileHeaderContainer: {
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    height: 155,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))

export const MobileToolbar = (props: {
  lightMode: "light" | "dark"
  onClick: () => void
  open: boolean
}): React.ReactElement => {
  const c = useStylesHeader()
  const { mobileHeaderContainer } = c
  return (
    <Hidden mdUp>
      <Container className={mobileHeaderContainer}>
        <Container style={{ padding: 0, zIndex: 3 }}>
          <Link style={{ boxShadow: "none" }} to="/">
            <img
              src={props.lightMode === "light" ? logoBlack : logo}
              alt="logo-black"
              style={{ margin: 16, height: 100 }}
            />
          </Link>
        </Container>
        <CloseButton onClick={props.onClick} open={props.open} />
      </Container>
    </Hidden>
  )
}
