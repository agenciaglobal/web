import { createMuiTheme } from "@material-ui/core"
import { lightPalette } from "./light"
import { LightMode } from "./theme"
import { typography } from "./typography"

const darkPalette = {
  primary: { main: "#000", contrastText: "#FFF" },
  secondary: { main: "#FFF", contrastText: "#000" },
  grey: {
    A100: "rgba(255, 255, 255, 0.6)",
    A200: "#232323",
    A400: "#AAA",
  },
}
const darkOptions = {
  palette: darkPalette,
  themeName: "dark" as LightMode,
  typography,
  overrides: {
    MuiTab: {
      wrapper: {
        color: darkPalette.secondary.main,
      },
    },
    MuiTypography: {
      root: {
        color: darkPalette.secondary.main,
      },
    },
  },
}
export const darkTheme = createMuiTheme(darkOptions)
