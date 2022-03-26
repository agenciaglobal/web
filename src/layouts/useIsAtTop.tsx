import { useEffect, useState } from "react"
import _ from "lodash"

export const useIsAtTop = (): boolean => {
  const [top, setTop] = useState(true)
  useEffect(() => {
    window.onscroll = () => {
      const pageYOffset = window.pageYOffset
      const condition = pageYOffset < 155
      _.debounce(() => {
        setTop(condition)
      }, 0)()
    }
    return () => {
      window.onscroll = null
    }
  }, [])
  return top
}
