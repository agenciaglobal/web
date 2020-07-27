import { ThemeOptions } from "@material-ui/core"

export type LightMode = "light" | "dark"

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: LightMode
  }
}
