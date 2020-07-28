import { createMuiTheme } from "@material-ui/core"
import { LightMode } from "./theme"

const darkOptions = {
  themeName: "dark" as LightMode,
  palette: {
    type: "dark",
    primary: { main: "#000", contrastText: "#FFF" },
    background: {
      default: "#000",
      paper: "#000",
    },
  },
  typography: {
    allVariants: {
      color: "#FFF",
      fontFamily: "GSTwo",
    },
  },
}
export const darkTheme = createMuiTheme(darkOptions)
