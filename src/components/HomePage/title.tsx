import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useI18next } from "gatsby-plugin-react-i18next"
import * as React from "react"

const useGridStyles = makeStyles(() => ({
  title: {
    marginTop: 24,
    fontFamily: "GSThree",
    fontSize: "40px",
    lineHeight: "65px",
    textTransform: "capitalize",
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "27px",
    lineHeight: "30px",
    textTransform: "capitalize",
  },
}))
export const HomeTitleComponent = (): React.ReactElement => {
  const { t } = useI18next()
  const classes = useGridStyles()
  const home = t("home")
  return (
    <React.Fragment>
      <Typography className={classes.title} noWrap={true}>
        {home.title}
      </Typography>
      <Typography noWrap={true} className={classes.subtitle}>
        {home.subtitle}
      </Typography>
    </React.Fragment>
  )
}
