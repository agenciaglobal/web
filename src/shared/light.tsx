import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import { LightMode } from "./theme"

const lightOptions: ThemeOptions = {
  themeName: "light" as LightMode,
  palette: {
    primary: { main: "#FFF", contrastText: "#000" },
    background: {
      default: "#FFF",
      paper: "#FFF",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
      fontFamily: "GSTwo",
    },
  },
}
export const lightTheme = createMuiTheme(lightOptions)
