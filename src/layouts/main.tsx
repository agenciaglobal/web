import { Container, Hidden } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import * as React from "react"
import classNames from "classnames"
import { LayoutHeader } from "components/LayoutHeader/layoutHeader"
import { LayoutHeaderMobile } from "components/LayoutHeader/layoutHeaderMobile"
import LeftDrawer from "components/LayoutLeftDrawer/leftDrawer"
import { RightDrawer } from "components/LayoutRightDrawer/rightDrawer"
import { useStyles } from "./styles"
import Footer from "../components/LayoutFooter/footer"
import { ThemeSwitch } from "components/ThemeSwitch/switch"
import SideFooter from "components/LayoutFooter/side-footer"
import { useEffect, useState } from "react"

interface Props {
  uri: string
  lightMode: "light" | "dark"
  toggleLightMode: () => void
  children: React.ReactElement
}
const SCROLL_UP = "up"
const SCROLL_DOWN = "down"

type Directions = "up" | "down"

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off,
}: {
  initialDirection: Directions
  thresholdPixels: number
  off: boolean
}) => {
  const [scrollDir, setScrollDir] = React.useState(initialDirection)
  React.useEffect(() => {
    const threshold = thresholdPixels || 0
    let lastScrollY = window.pageYOffset
    let ticking = false
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }
    !off
      ? window.addEventListener("scroll", onScroll)
      : setScrollDir(initialDirection)

    return () => window.removeEventListener("scroll", onScroll)
  }, [initialDirection, thresholdPixels, off])

  return scrollDir
}

const useIsAtTop = (): boolean => {
  const [top, setTop] = useState(true)
  useEffect(() => {
    window.onscroll = () => setTop(window.pageYOffset === 0)
    return () => {
      window.onscroll = null
    }
  }, [])
  return top
}

export const ActualLayout = ({
  children,
  lightMode,
  toggleLightMode,
  uri,
}: Props): React.ReactElement => {
  const classes = useStyles()
  const scrollDirection = useScrollDirection({
    initialDirection: "down",
    thresholdPixels: 0,
    off: false,
  })
  const top = useIsAtTop()
  const isScrollingUp = scrollDirection === "up" && !top
  return (
    <div className={classes.wrapper}>
      <RightDrawer scrolled={isScrollingUp} uri={uri} />
      <LeftDrawer scrolled={isScrollingUp} />
      <LayoutHeaderMobile
        lightMode={lightMode}
        uri={uri}
        toggleLightMode={toggleLightMode}
      />
      <LayoutHeader
        hide={!top && scrollDirection !== "down"}
        lightMode={lightMode}
        uri={uri}
      />
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
      <Hidden smDown>
        <div
          style={{
            display: "block",
            position: "fixed",
            bottom: 16,
            left: 33,
            zIndex: 1500,
          }}
        >
          <SideFooter />
        </div>
      </Hidden>
      <Footer />
    </div>
  )
}
