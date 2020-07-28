import { ThemeOptions } from "@material-ui/core"

export type LightMode = "light" | "dark"

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: LightMode
    custom: {
      grey1: React.CSSProperties["color"]
      grey2: React.CSSProperties["color"]
      greyAlpha: React.CSSProperties["color"]
    }
  }
  interface Theme {
    themeName?: LightMode
    custom: {
      grey1: React.CSSProperties["color"]
      grey2: React.CSSProperties["color"]
      greyAlpha: React.CSSProperties["color"]
    }
  }
}
