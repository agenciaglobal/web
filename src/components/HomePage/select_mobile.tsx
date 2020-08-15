import * as React from "react"
import { FormControl, Theme } from "@material-ui/core"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Box from "@material-ui/core/Box"

interface Props {
  setValue: (n: number) => void
  value: number
  categories: string[]
}

const MyIcon = () => {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.75745"
        y="6.82837"
        width="8"
        height="2"
        transform="rotate(-45 5.75745 6.82837)"
        fill="#666666"
      />
      <rect
        x="2.17151"
        y="0.757324"
        width="8"
        height="2"
        transform="rotate(45 2.17151 0.757324)"
        fill="#666666"
      />
    </svg>
  )
}

const useGridStyles = makeStyles((theme: Theme) => ({
  text: {},
  menu: {
    backgroundColor: "transparent !important",
    "& p": {
      fontFamily: "GSTwo",
      color: theme.palette.primary.main,
      paddingLeft: 13,
      paddingRight: 8,
      backgroundColor: "#FFCC00",
    },
  },
}))
export const MobileSelect = ({
  categories,
  setValue,
  value,
}: Props): React.ReactElement => {
  const classes = useGridStyles()
  const onChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
    setValue(Number(e.target.value))
  return (
    <Box style={{ display: "flex" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 16,
        }}
      >
        <Typography>Filtrando por:</Typography>
      </Box>
      <FormControl>
        <Select
          classes={{
            selectMenu: classes.menu,
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          disableUnderline={true}
          value={value}
          IconComponent={MyIcon}
          onChange={onChange}
        >
          {categories.map((d, index) => {
            return (
              <MenuItem classes={{}} key={index} value={index}>
                <Typography className={classes.text}>{d}</Typography>
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
