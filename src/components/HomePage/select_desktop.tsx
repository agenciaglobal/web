import { makeStyles, Theme } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import * as React from "react"
import { Typography } from "@material-ui/core"

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
})

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    // background: "red",
    // color: theme.palette.primary.contrastText,
  },
  indicator: { color: "red" },
  active: {
    "& span": {
      // background: "red",
    },
  },
}))

type Props = {
  setValue: (n: number) => void
  value: number
  categories: string[]
}
export const DesktopTabs = ({
  setValue,
  categories,
  value,
}: Props): React.ReactElement => {
  const classes = useStyles()
  return (
    <Tabs
      classes={{ indicator: classes.indicator }}
      TabIndicatorProps={{
        style: { background: "transparent" },
      }}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      aria-label="simple tabs example"
    >
      {categories.map((d, index) => {
        return (
          <Tab
            classes={{
              wrapper: classes.wrapper,
              // root: classNames({ [classes.active]: index === value }),
            }}
            key={index}
            label={
              <Typography
                style={{
                  background: index === value ? "#FFCC00" : "transparent",
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
              >
                {d}
              </Typography>
            }
            {...a11yProps(index)}
          />
        )
      })}
    </Tabs>
  )
}
