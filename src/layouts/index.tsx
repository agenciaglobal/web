import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { darkTheme, LightMode, lightTheme } from "../shared/theme"
import "./global.css"
import { ActualLayout } from "./main"
import { useLocalStorage } from "./useLocalStorage"

interface Props {
  uri: string
  children: React.ReactElement
}

const Layout = ({ children, uri }: Props): React.ReactElement => {
  const [mode, setMode] = useLocalStorage<LightMode>("gblm", "dark")
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <ActualLayout
        uri={uri}
        lightMode={mode}
        toggleLightMode={() => setMode(mode === "light" ? "dark" : "light")}
      >
        {children}
      </ActualLayout>
    </ThemeProvider>
  )
}

export default Layout
