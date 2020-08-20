import { ThemeOptions } from "@material-ui/core"
import { CSSProperties } from "react"

export type LightMode = "light" | "dark"

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: LightMode
    custom: {
      grey1: CSSProperties["color"]
      grey2: CSSProperties["color"]
      greyAlpha: CSSProperties["color"]
      greyAlpha2: CSSProperties["color"]
    }
  }
  interface Theme {
    themeName: LightMode
    custom: {
      grey1: CSSProperties["color"]
      grey2: CSSProperties["color"]
      greyAlpha: CSSProperties["color"]
      greyAlpha2: CSSProperties["color"]
    }
  }
}
