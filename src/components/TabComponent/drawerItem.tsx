import { Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import className from "classnames"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { LightMode } from "shared/theme"
import useTheme from "@material-ui/core/styles/useTheme"
import { darkOptions } from "src/shared/dark"
import { lightOptions } from "src/shared/light"

const itemStyles = (mode: LightMode) =>
  makeStyles(() => {
    const actualTheme = mode === "light" ? lightOptions : darkOptions
    return createStyles({
      common: {
        fontFamily: "GSTwo",
        color: actualTheme.custom.greyAlpha,
        fontSize: 15,
        lineHeight: "18px",
        border: "2px solid transparent",
        margin: "0px 8px",
        padding: "4px 0px 0px",
        "&:hover": actualTheme.palette?.primary?.contrastText,
      },
      selected: {
        fontFamily: "GSThree",
        fontWeight: "bold",
        color: actualTheme.palette?.primary?.contrastText,
        borderBottom: "2px solid #FFCC00",
      },
      contactCommon: {
        fontFamily: "GSTwo",
        color: "#000",
        fontSize: 13,
        lineHeight: "18px",
        border: "1px solid #FFCC00",
        margin: "0px 2px",
        padding: "5px 6px 3px",
        "&:hover": {
          color: "#000",
          border: "2px solid #FFCC00",
          padding: "4px 5px 2px",
        },
      },
      contactSelected: {
        fontFamily: "GSThree",
        color: "#000",
        background: "#FFCC00",
        "&:hover": {
          fontFamily: "GSThree",
          fontWeight: "bold",
          background: "#FFCC00",
        },
      },
      labelCommon: {
        fontFamily: "GSTwo",
        color: actualTheme.custom.greyAlpha,
        fontSize: 13,
        lineHeight: "18px",
        "&:hover": {
          color: actualTheme.palette?.primary?.contrastText,
        },
      },
      labelSelected: {
        fontFamily: "GSThree",
        color: actualTheme.palette?.primary?.contrastText,
        "&:hover": {
          fontFamily: "GSThree",
        },
      },
      labelContactSelected: {
        fontFamily: "GSThree",
        color: "#000",
        "&:hover": {
          fontFamily: "GSThree",
          color: "#000",
        },
      },
    })
  })

export const isCurrentHook = (to: string, uri: string): boolean => {
  return to === "/"
    ? uri === to || uri.includes("portifolio")
    : uri.includes(to)
}

export const TabComponent = ({
  mode,
  label,
  uri,
  to,
}: Props): React.ReactElement => {
  const isCurrent = isCurrentHook(to, uri)
  const theme = useTheme()
  const {
    common,
    contactCommon,
    selected,
    contactSelected,
    labelCommon,
    labelSelected,
    labelContactSelected,
  } = itemStyles(mode || theme.themeName)()
  const isContact = to === "/contact"
  const classNameInternal = className({
    [common]: !isContact,
    [contactCommon]: isContact,
    [selected]: isCurrent && !isContact,
    [contactSelected]: isCurrent && isContact,
  })
  const labelClassName = className({
    [labelCommon]: true,
    [labelSelected]: isCurrent && !isContact,
    [labelContactSelected]: isCurrent && isContact,
  })
  return (
    <Link
      to={to}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
      className={classNameInternal}
    >
      <Typography className={labelClassName}>{label}</Typography>
    </Link>
  )
}

interface Props {
  mode?: LightMode
  label: string
  to: string
  uri: string
}
