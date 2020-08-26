import { makeStyles, useTheme } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import * as React from "react"
import { Typography } from "@material-ui/core"

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
})

const useStyles = makeStyles(() => ({
  wrapper: {
    // background: "red",
    // color: theme.palette.primary.contrastText,
  },
  tabs: {
    minWidth: 0,
    "& button": {
      minWidth: 0,
      padding: "0px 24px 0px 0px",
      "& selected": {
        background: "transparent",
      },
    },
  },
  active: {
    "& span": {
      color: "red",
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
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Tabs
      className={classes.tabs}
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
            disableRipple
            classes={{
              wrapper: classes.wrapper,
              // root: classNames({ [classes.active]: index === value }),
            }}
            key={index}
            label={
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  color: index === value ? "#000" : theme.custom.grey1,
                  background: index === value ? "#FFCC00" : "transparent",
                  paddingRight: 2,
                  paddingLeft: 2,
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
