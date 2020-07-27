import { Box } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import * as classNames from "classnames"

import React, { Fragment } from "react"

export const useStylesClasses = makeStyles(() =>
  createStyles({
    box: {
      width: 60,
      border: "none",
      display: "flex",
    },
    inactive: {
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
      fontSize: 12,
      height: 30,
      color: "black",
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
  }),
)

type SuporttedLanguages = "pt" | "br"

interface Props {
  style?: React.CSSProperties
  language: SuporttedLanguages
  changeLanguage: (lang: SuporttedLanguages) => void
}

export const LanguageSwitcher = ({
  language,
  changeLanguage,
  style,
}: Props): React.ReactElement => {
  const classes = useStylesClasses()
  const { inactive, active } = useStylesClasses()
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
          <Typography>PT</Typography>
        </button>
        <button
          onClick={() => void changeLanguage("en" as SuporttedLanguages)}
          className={ENButtonClass}
        >
          <Typography>EN</Typography>
        </button>
      </Box>
    </Fragment>
  )
}
