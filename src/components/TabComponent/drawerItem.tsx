import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import className from "classnames"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { LightMode } from "shared/theme"
import useTheme from "@material-ui/core/styles/useTheme"

const itemStyles = (mode: LightMode) =>
  makeStyles((theme: Theme) => {
    const color = mode === "dark" ? "white" : "black"
    return createStyles({
      common: {
        fontFamily: "GSTwo",
        color: theme.custom.greyAlpha,
        fontSize: 15,
        lineHeight: "18px",
        border: "2px solid transparent",
        margin: "0px 8px",
        padding: "4px 0px 0px",
        "&:hover": { color },
      },
      selected: {
        fontFamily: "GSThree",
        fontWeight: "bold",
        color: color,
        borderBottom: "2px solid #FFCC00",
      },
      contactCommon: {
        fontFamily: "GSTwo",
        color: theme.custom.greyAlpha,
        fontSize: 13,
        lineHeight: "18px",
        border: "1px solid #FFCC00",
        margin: "0px 2px",
        padding: "5px 6px 3px",
        "&:hover": {
          color: color,
          border: "2px solid #FFCC00",
          padding: "4px 5px 2px",
        },
      },
      contactSelected: {
        fontFamily: "GSThree",
        color,
        background: "#FFCC00",
        "&:hover": {
          fontFamily: "GSThree",
          fontWeight: "bold",
          background: "#FFCC00",
        },
      },
      labelCommon: {
        fontFamily: "GSTwo",
        color: theme.custom.greyAlpha,
        fontSize: 13,
        lineHeight: "18px",
        "&:hover": {
          color,
        },
      },
      labelSelected: {
        fontFamily: "GSThree",
        color: color,
        "&:hover": {
          fontFamily: "GSThree",
        },
      },
      labelContactSelected: {
        fontFamily: "GSThree",
        color,
        "&:hover": {
          fontFamily: "GSThree",
          color: theme.custom.greyAlpha,
        },
      },
    })
  })

export const isCurrentHook = (to: string, uri: string): boolean => {
  const { language } = useI18next()
  const s = language === "en" ? "/" + language + to : to
  const isWork = "/en" === uri || "/" === uri || uri.includes("trabalhos")
  const isCurrent = to === "/" ? isWork : uri.includes(s)
  return isCurrent
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
