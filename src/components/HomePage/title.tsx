import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import { useTranslation } from "react-i18next"

const useGridStyles = makeStyles(() => ({
  title: {
    marginTop: 24,
    fontFamily: "GSThree",
    fontSize: "30px",
    "@media (min-width:600px)": {
      fontSize: "40px",
    },
    lineHeight: "1.4em",
    textTransform: "capitalize",
    paddingBottom: 8,
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "18px",
    "@media (min-width:600px)": {
      fontSize: "27px",
    },
    lineHeight: "1.4em",
    textTransform: "capitalize",
    paddingBottom: 45,
  },
}))
export const HomeTitleComponent = (): React.ReactElement => {
  const { t } = useTranslation()
  const classes = useGridStyles()
  return (
    <React.Fragment>
      <Typography className={classes.title} noWrap={false}>
        {t("home.title")}
      </Typography>
      <Typography noWrap={false} className={classes.subtitle}>
        {t("home.subtitle")}
      </Typography>
    </React.Fragment>
  )
}
