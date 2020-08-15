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
        // We haven't exceeded the threshold
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

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off
      ? window.addEventListener("scroll", onScroll)
      : setScrollDir(initialDirection)

    return () => window.removeEventListener("scroll", onScroll)
  }, [initialDirection, thresholdPixels, off])

  return scrollDir
}

export const ActualLayout = ({
  children,
  lightMode,
  toggleLightMode,
  uri,
}: Props): React.ReactElement => {
  const classes = useStyles()
  console.log(uri)
  console.log(uri)
  const isContact = uri.includes("/contact")
  const test = useScrollDirection({
    initialDirection: "down",
    thresholdPixels: 0,
    off: false,
  })
  // const [scrolled, setScrolled] = React.useState(false)
  const scrolled = test === "up"
  console.log(uri)
  console.log(test)
  return (
    <div className={classes.wrapper}>
      <RightDrawer scrolled={scrolled} uri={uri} />
      <LeftDrawer scrolled={scrolled} />
      <LayoutHeaderMobile
        lightMode={lightMode}
        uri={uri}
        toggleLightMode={toggleLightMode}
      />
      <LayoutHeader lightMode={lightMode} uri={uri} />
      <Container
        className={classNames(classes.root, {
          [classes.scrolled]: scrolled,
          // [classes.contact]: isContact,
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
