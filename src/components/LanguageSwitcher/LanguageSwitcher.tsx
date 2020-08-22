import { Box, Button } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import * as classNames from "classnames"
import React, { Fragment } from "react"
import { LightMode } from "shared/theme"
import { ClassNameMap } from "@material-ui/styles/withStyles"

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
        minWidth: 30,
        fontFamily: "GSThree",
        fontSize: 12,
        fontWeight: "bold",
        height: 30,
        color: "#000",
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
  language: SupportedLanguages
  changeLanguage: (lang: SupportedLanguages) => void
  mode: LightMode
}

export const LanguageSwitcher = ({
  language,
  changeLanguage,
  style,
  mode,
}: Props): React.ReactElement => {
  const classes = useStylesClasses(mode)()
  const { inactive, active } = useStylesClasses(mode)()
  const isEnglish = language === "en"
  const isPortuguese = language === "pt"
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
          onClick={() => void changeLanguage("pt" as SuporttedLanguages)}
          className={PTButtonClass}
        >
          PT
        </Button>
        <Button
          onClick={() => void changeLanguage("en" as SuporttedLanguages)}
          className={ENButtonClass}
        >
          EN
        </Button>
      </Box>
    </Fragment>
  )
}
