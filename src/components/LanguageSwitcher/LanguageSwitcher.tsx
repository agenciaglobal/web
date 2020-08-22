import { Box } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import * as classNames from "classnames"
import React, { Fragment } from "react"
import { LightMode } from "shared/theme"

export const useStylesClasses = (mode: LightMode) =>
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
        width: 30,
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
        width: 30,
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

export type SuporttedLanguages = "pt" | "en"

interface Props {
  style?: React.CSSProperties
  language: SuporttedLanguages
  changeLanguage: (lang: SuporttedLanguages) => void
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
        <button
          onClick={() => void changeLanguage("pt" as SuporttedLanguages)}
          className={PTButtonClass}
        >
          PT
        </button>
        <button
          onClick={() => void changeLanguage("en" as SuporttedLanguages)}
          className={ENButtonClass}
        >
          EN
        </button>
      </Box>
    </Fragment>
  )
}
