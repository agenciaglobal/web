import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { darkTheme, LightMode, lightTheme } from "../shared/theme"
import { ActualLayout } from "./main"

const Layout = (props: any) => {
  const [mode, setMode] = React.useState<LightMode>("light")
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <ActualLayout
        uri={props.uri}
        lightMode={mode}
        toggleLightMode={() => setMode(mode === "light" ? "dark" : "light")}
        children={props.children}
      />
    </ThemeProvider>
  )
}

export default Layout