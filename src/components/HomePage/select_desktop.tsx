import { makeStyles, Theme } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import * as React from "react"

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
})
const useStyles = makeStyles((theme: Theme) => ({
  wrapper: { color: theme.palette.primary.contrastText },
}))

export const DesktopTabs = ({
  setValue,
  categories,
  value,
}: {
  setValue: (n: number) => void
  value: number
  categories: string[]
}): React.ReactElement => {
  const classes = useStyles()
  return (
    <Tabs
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      aria-label="simple tabs example"
    >
      {categories.map((d, index) => {
        return (
          <Tab
            classes={{ wrapper: classes.wrapper }}
            key={index}
            label={d}
            {...a11yProps(index)}
          />
        )
      })}
    </Tabs>
  )
}
