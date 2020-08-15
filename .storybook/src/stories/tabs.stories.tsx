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
  categories: { label: string }[]
}

// export const desktop = ({ setValue, value, categories }: Props) => {
//   return (
//     <DesktopTabs
//       setValue={setValue}
//       value={value === undefined ? 0 : value}
//       categories={categories === undefined ? defaultItens : categories}
//     />
//   )
// }

export const mobile = (x: Props) => {
  console.log(x)
  return (
    <MobileSelect
      setValue={x.setValue}
      value={x.value}
      categories={(x.categories || []).map((d) => d.label)}
    />
  )
}

const controls = {
  value: { type: "number", value: 0 },
  categories: {
    type: "array",
    value: [{ label: "Laptop" }, { label: "Book" }],
    rowType: { label: { type: "text" } },
    defaultValue: [{ label: "Laptop" }, { label: "Book" }],
  },
  setValue: {
    type: ControlTypes.BUTTON,
    value: (val: number) => {},
    defaultValue: (val: number) => {},
  },
}

mobile.controls = controls
// desktop.controls = controls
