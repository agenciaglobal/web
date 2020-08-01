import { ControlTypes } from "@component-controls/core"
import * as React from "react"
import { GlobalPageTitle } from "../../../src/components/GlobalPageTitle/globalTitle"

export default {
  title: "GlobalPageTitle",
}
export const globalPageTitle = ({ label }) => {
  return <GlobalPageTitle label={label} />
}

globalPageTitle.controls = {
  label: {
    type: ControlTypes.TEXT,
    value: "SeuTItulo",
  },
}
