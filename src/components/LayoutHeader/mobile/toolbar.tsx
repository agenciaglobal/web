import { Container, Hidden } from "@material-ui/core"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import logoBlack from "../../../../static/logo-black.png"
import logo from "../../../../static/logo-white.png"
import { CloseButton } from "./close"
import { useStylesHeader } from "./toolbar_styles"

interface Props {
  lightMode: "light" | "dark"
  onClick: () => void
  open: boolean
}

export const MobileToolbar = (props: Props): React.ReactElement => {
  const { mobileHeaderContainer } = useStylesHeader()
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
