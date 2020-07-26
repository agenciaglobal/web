import { Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"

const useStylesMenu = makeStyles((theme: Theme) => ({
  text: {
    listStyle: "none",
    textDecoration: "none",
    textAlign: "left",
    marginTop: 16,
    marginBottom: 16,
    color: theme.palette.secondary.main,
    fontSize: "30px",
    lineHeight: "32px",
  },
}))
export const LinkMobileComponent = ({
  label,
  close,
  to,
}: {
  close: () => void
  label: string
  to: string
}): React.ReactElement => {
  const classes = useStylesMenu()
  return (
    <Link
      to={to}
      onClick={close}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Typography className={classes.text}>{label}</Typography>
    </Link>
  )
}
