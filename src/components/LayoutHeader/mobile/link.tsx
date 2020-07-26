import { Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"

const useStylesMenu = makeStyles((theme: Theme) => ({
  menuItem: {
    listStyle: "none",
    textDecoration: "none",
    textAlign: "left",
    fontSize: 24,
    marginBottom: 6,
    color: theme.palette.secondary.main,
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
      className={classes.menuItem}
    >
      <Typography>{label}</Typography>
    </Link>
  )
}
