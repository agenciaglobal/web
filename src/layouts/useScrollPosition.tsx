import * as React from "react"

const SCROLL_UP = "up"
const SCROLL_DOWN = "down"
type Directions = "up" | "down"

type Props = {
  initialDirection: Directions
  thresholdPixels: number
  off: boolean
}
export const useScrollDirection = (props?: Props): Directions => {
  const options = props || {
    initialDirection: "down",
    thresholdPixels: 0,
    off: false,
  }
  const [scrollDir, setScrollDir] = React.useState(options.initialDirection)
  React.useEffect(() => {
    const threshold = options.thresholdPixels || 0
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
    !options.off
      ? window.addEventListener("scroll", onScroll)
      : setScrollDir(options.initialDirection)

    return () => window.removeEventListener("scroll", onScroll)
  }, [options.initialDirection, options.thresholdPixels, options.off])

  return scrollDir
}
