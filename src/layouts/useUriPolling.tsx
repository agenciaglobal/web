import * as React from "react"

function extracted() {
  if (typeof document === "undefined") return "/"
  return document?.location?.pathname || "/"
}

export const useUriPolling = (): string => {
  const url = extracted()
  const [uri, setUri] = React.useState(url || "/")
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (uri !== url) setUri(url)
    }, 100)
    return () => clearInterval(interval)
  })
  return uri
}
