import * as React from "react"
import { DesktopTabs } from "../../../src/components/HomePage/select_desktop"
import { ControlTypes } from "@component-controls/core"
import { MobileSelect } from "../../../src/components/HomePage/select_mobile"

export default {
  title: "Home Categories Selector",
}

const defaultItens = ["WORK", "CLIENT"]

export const desktop = ({ setVal, val, categories }) => {
  return (
    <DesktopTabs
      setValue={setVal}
      value={val === undefined ? 0 : val}
      categories={(categories === undefined ? defaultItens : categories).map(
        (r) => r.name,
      )}
    />
  )
}

export const mobile = ({ setVal, val, categories }) => (
  <MobileSelect
    setValue={setVal}
    value={val === undefined ? 0 : val}
    categories={(categories === undefined ? defaultItens : categories).map(
      (r) => r.name,
    )}
  />
)

const controls = {
  val: {
    type: "number",
    value: 0,
  },
  categories: {
    type: ControlTypes.ARRAY,
    label: "categories",
    rowType: {
      name: { type: ControlTypes.TEXT },
    },
    value: [{ name: "Laptop" }, { name: "Book" }, { name: "Whiskey" }],
  },
  setVal: {
    type: ControlTypes.BUTTON,
    value: () => {},
  },
}

mobile.controls = controls
desktop.controls = controls
