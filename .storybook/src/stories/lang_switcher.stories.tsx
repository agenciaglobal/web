import { ControlTypes } from "@component-controls/core"
import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { LanguageSwitcher } from "../../../src/components/LanguageSwitcher/LanguageSwitcher"
import { darkTheme } from "../../../src/shared/dark"
import { lightTheme } from "../../../src/shared/light"

export default {
  title: "Light Language Switcher",
}

function extracted(color: string) {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 60,
    backgroundColor: color,
  }
}

export const portuguese = ({ language, mode }) => {
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <div style={extracted(mode === "light" ? "white" : "black")}>
        <LanguageSwitcher
          language={language}
          languages={["pt", "en"]}
          changeLanguage={(d: string) => {}}
        />
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
