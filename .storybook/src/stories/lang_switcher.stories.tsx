import { ControlTypes } from "@component-controls/core"
import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import {
  LanguageSwitcher,
  SupportedLanguages,
} from "../../../src/components/LanguageSwitcher/LanguageSwitcher"
import { darkTheme } from "../../../src/shared/dark"
import { lightTheme } from "../../../src/shared/light"
import { LightMode } from "../../../src/shared/theme"

export default {
  title: "Light Language Switcher",
}

interface Props {
  language: SupportedLanguages
  mode: string
}

export const portuguese = ({ mode }: Props) => {
  let color = mode === "light" ? "white" : "black"
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 150,
          height: 60,
          backgroundColor: color,
        }}
      >
        <LanguageSwitcher mode={mode as LightMode} />
      </div>
    </ThemeProvider>
  )
}

portuguese.controls = {
  mode: {
    type: ControlTypes.OPTIONS,
    options: ["light", "dark"],
    value: "light",
  },
  language: {
    type: ControlTypes.OPTIONS,
    options: ["pt", "en"],
    value: "pt",
  },
}
