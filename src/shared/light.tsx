import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import { LightMode } from "./theme"
import { typography } from "./typography"

export const lightPalette = {
  primary: { main: "#FFF", contrastText: "#000" },
  secondary: { main: "#000", contrastText: "#FFF" },
  grey: {
    A100: "rgba(0, 0, 0, 0.6)",
    A200: "#E5E5E5",
    A400: "#333",
  },
}
const lightOptions: ThemeOptions = {
  palette: lightPalette,
  themeName: "light" as LightMode,
  typography,
  overrides: {
    MuiTab: {
      wrapper: {
        color: lightPalette.secondary.main,
      },
    },
    MuiTypography: {
      root: {
        // color: lightPalette.secondary.main,
      },
    },
  },
}
export const lightTheme = createMuiTheme(lightOptions)
