import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { darkTheme } from "../shared/dark"
import { lightTheme } from "../shared/light"
import { LightMode } from "../shared/theme"
import "./global.css"
import { ActualLayout } from "./main"
// import youtube from "netlify-cms-widget-youtube"
//
// CMS.registerWidget("youtube", youtubeControl, youtubePreview)

interface Props {
  uri: string
  children: React.ReactElement
}

const Layout = ({ children, uri }: Props): React.ReactElement => {
  const [mode, setMode] = React.useState<LightMode>("light")
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
