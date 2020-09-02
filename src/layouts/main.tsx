import { Container, Hidden } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import * as React from "react"
import { useState } from "react"
import classNames from "classnames"
import { LayoutHeader } from "components/LayoutHeader/layoutHeader"
import { LayoutHeaderMobile } from "components/LayoutHeader/layoutHeaderMobile"
import LeftDrawer from "components/LayoutLeftDrawer/leftDrawer"
import { RightDrawer } from "components/LayoutRightDrawer/rightDrawer"
import { useStyles } from "./styles"
import Footer from "../components/LayoutFooter/footer"
import { ThemeSwitch } from "components/ThemeSwitch/switch"
import { useScrollDirection } from "./useScrollPosition"
import { useIsAtTop } from "./useIsAtTop"

interface Props {
  lightMode: "light" | "dark"
  toggleLightMode: () => void
  children: React.ReactElement
}

export const ActualLayout = ({
  children,
  lightMode,
  toggleLightMode,
}: Props): React.ReactElement => {
  const [leftHover, leftSetOpen] = useState(false)
  const [rightHover, rightSetOpen] = useState(false)
  const top = useIsAtTop()
  const [uri, setUri] = React.useState(
    typeof document !== "undefined" ? document.location.pathname : "/",
  )
  const classes = useStyles()
  const scrollDirection = useScrollDirection()
  const isScrollingUp = scrollDirection === "up" && !top
  return (
    <div className={classes.wrapper}>
      <RightDrawer
        open={!top ? rightHover : false}
        setOpen={rightSetOpen}
        scrolled={!top ? isScrollingUp : false}
        uri={uri}
      />
      <LeftDrawer
        open={!top ? leftHover : false}
        setOpen={leftSetOpen}
        scrolled={!top ? isScrollingUp : false}
      />
      <LayoutHeaderMobile
        setUri={setUri}
        lightMode={lightMode}
        uri={uri}
        toggleLightMode={toggleLightMode}
        onTop={!top}
      />
      <LayoutHeader setUri={setUri} lightMode={lightMode} uri={uri} />
      <Container
        className={classNames(classes.root, {
          [classes.scrolled]: isScrollingUp,
        })}
      >
        <Box>{children}</Box>
      </Container>
      <Hidden smDown>
        <div
          style={{
            display: "block",
            position: "fixed",
            bottom: 20,
            right: 33,
            zIndex: 1500,
          }}
        >
          <ThemeSwitch
            lightMode={lightMode}
            toggleLightMode={toggleLightMode}
          />
        </div>
      </Hidden>
      <Footer />
    </div>
  )
}
