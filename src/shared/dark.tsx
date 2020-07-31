import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import { LightMode } from "./theme"

const darkOptions = {
  themeName: "dark" as LightMode,
  palette: {
    type: "dark",
    primary: { main: "#000", contrastText: "#FFF" },
    secondary: { main: "#FFCC00" },
    background: {
      default: "#000",
      paper: "#000",
    },
  },
  custom: {
    grey1: "#AAA",
    grey2: "#232323",
    greyAlpha: "rgba(255, 255, 255, 0.6)",
  },
  typography: {
    allVariants: {
      color: "#FFF",
      fontFamily: "GSTwo",
    },
  },
}
export const darkTheme = createMuiTheme(darkOptions as ThemeOptions)
