import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import * as cs from "classnames"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"

const itemStyles = makeStyles((theme: Theme) => {
  const color = theme.palette.primary.contrastText
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
      fontSize: 15,
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
      color: "#000",
      background: "#FFCC00",
      "&:hover": {
        fontFamily: "GSThree",
        color: "#000",
        fontWeight: "bold",
        background: "#FFCC00",
      },
    },
    labelCommon: {
      fontFamily: "GSTwo",
      color: theme.custom.greyAlpha,
      fontSize: 15,
      lineHeight: "18px",
      "&:hover": {
        color: color,
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
      color: "#000",
      "&:hover": {
        fontFamily: "GSThree",
        color: "#000",
      },
    },
  })
})

export const isCurrentHook = (destination: string, uri: string) => {
  const { language } = useI18next()
  const s = language === "en" ? "/" + language + destination : destination
  const isCurrent =
    destination === "/" ? "/en" === uri || "/" === uri : uri.includes(s)
  return { isCurrent }
}

export const TabComponent = ({
  label,
  page,
  uri,
}: Props): React.ReactElement => {
  const {
    common,
    contactCommon,
    selected,
    contactSelected,
    labelCommon,
    labelSelected,
    labelContactSelected,
  } = itemStyles()
  const isContact = label === "CONTACT"
  const { isCurrent } = isCurrentHook(page, uri)
  const className = cs({
    [common]: !isContact,
    [contactCommon]: isContact,
    [selected]: isCurrent && !isContact,
    [contactSelected]: isCurrent && isContact,
  })
  const labelClassName = cs({
    [labelCommon]: true,
    [labelSelected]: isCurrent && !isContact,
    [labelContactSelected]: isCurrent && isContact,
  })
  return (
    <Link
      to={page}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
      className={className}
    >
      <Typography className={labelClassName}>{label}</Typography>
    </Link>
  )
}

interface Props {
  uri: string
  label: string
  page: string
}
