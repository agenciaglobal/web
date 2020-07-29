import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"

const useStylesMenu = makeStyles(() => ({
  text: {
    listStyle: "none",
    textDecoration: "none",
    textAlign: "left",
    marginTop: 16,
    marginBottom: 16,
    fontSize: "30px",
    lineHeight: "32px",
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
}))

interface Props {
  close: () => void
  label: string
  to: string
}

export const LinkMobileComponent = ({
  label,
  close,
  to,
}: Props): React.ReactElement => {
  const classes = useStylesMenu()
  return (
    <Link to={to} onClick={close} className={classes.link}>
      <Typography className={classes.text}>{label}</Typography>
    </Link>
  )
}
