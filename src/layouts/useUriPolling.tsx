import * as React from "react"

export const useUriPolling = (): string => {
  const [uri, setUri] = React.useState(document.location.pathname)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (uri !== document.location.pathname) setUri(document.location.pathname)
    }, 100)
    return () => clearInterval(interval)
  })
  return uri
}
