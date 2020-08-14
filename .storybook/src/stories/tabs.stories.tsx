import * as React from "react"
import { DesktopTabs } from "../../../src/components/HomePage/select_desktop"
import { ControlTypes } from "@component-controls/core"
import { MobileSelect } from "../../../src/components/HomePage/select_mobile"

export default {
  title: "Home Categories Selector",
}

const defaultItens = ["WORK", "CLIENT"]

interface Props {
  setValue: (n: number) => void
  value: number
  categories: string[]
}

export const desktop = ({ setValue, value, categories }: Props) => {
  return (
    <DesktopTabs
      setValue={setValue}
      value={value === undefined ? 0 : value}
      categories={categories === undefined ? defaultItens : categories}
    />
  )
}

export const mobile = ({ setValue, value, categories }: Props) => (
  <MobileSelect
    setValue={setValue}
    value={value === undefined ? 0 : value}
    categories={categories === undefined ? defaultItens : categories}
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
    value: ["Laptop", "Book", "Whiskey"],
  },
  setVal: {
    type: ControlTypes.BUTTON,
    value: () => {},
  },
}

mobile.controls = controls
desktop.controls = controls
