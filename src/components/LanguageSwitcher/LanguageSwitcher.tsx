import { Box, Button } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import * as classNames from "classnames"
import React, { Fragment } from "react"
import { LightMode } from "shared/theme"
import { ClassNameMap } from "@material-ui/styles/withStyles"
import { useTranslation } from "react-i18next"

export const useStylesClasses = (
  mode: LightMode,
): (() => ClassNameMap<"box" | "inactive" | "active">) =>
  makeStyles(() => {
    return createStyles({
      box: {
        width: 60,
        border: "none",
        display: "flex",
      },
      inactive: {
        color: mode === "light" ? "#000" : "#FFF",
        fontFamily: "GSTwo",
        fontSize: 12,
        height: 30,
        minWidth: 30,
        background: "transparent",
        borderRadius: 0,
        border: "none",
        outline: "none !important",
        "&:hover": {
          background: "transparent",
          boxShadow: "0px 0px 0px 2px #FFCC00 inset",
        },
      },
      active: {
        fontFamily: "GSThree",
        fontSize: 12,
        fontWeight: "bold",
        height: 30,
        color: "#000",
        minWidth: 30,
        background: "#FFCC00",
        borderRadius: 0,
        border: "none",
        outline: "none !important",
        "& p": {
          color: "black",
        },
        "&:hover": {
          background: "#FFCC00",
          boxShadow: "0px 0px 0px 2px #FFCC00 inset",
        },
      },
    })
  })

export type SupportedLanguages = "pt" | "en"

interface Props {
  style?: React.CSSProperties
  mode: LightMode
}

export const LanguageSwitcher = ({
  style,
  mode,
}: Props): React.ReactElement => {
  const classes = useStylesClasses(mode)()
  const { inactive, active } = useStylesClasses(mode)()
  const { i18n } = useTranslation()
  const isEnglish = i18n.language === "en"
  const isPortuguese = i18n.language === "pt"
  const PTButtonClass = classNames.default({
    [inactive]: isEnglish,
    [active]: isPortuguese,
  })
  const ENButtonClass = classNames.default({
    [inactive]: !isEnglish,
    [active]: !isPortuguese,
  })
  return (
    <Fragment>
      <Box style={style} className={classes.box}>
        <Button
          onClick={() => void i18n.changeLanguage("pt")}
          className={PTButtonClass}
        >
          PT
        </Button>
        <Button
          onClick={() => void i18n.changeLanguage("en")}
          className={ENButtonClass}
        >
          EN
        </Button>
      </Box>
    </Fragment>
  )
}
