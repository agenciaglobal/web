import { Theme, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import { isCurrentHook } from "components/TabComponent/drawerItem"

const useStylesMenu = makeStyles((theme: Theme) => ({
  current: {
    color: theme.palette.secondary.main,
  },
  text: {
    listStyle: "none",
    textDecoration: "none",
    textAlign: "left",
    marginTop: 16,
    marginBottom: 16,
    fontSize: "25px",
    lineHeight: "25px",
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
}))

interface Props {
  close: () => void
  label: string
  setUri: React.Dispatch<React.SetStateAction<string>>
  uri: string
  to: string
}

export const LinkMobileComponent = ({
  uri,
  label,
  setUri,
  close,
  to,
}: Props): React.ReactElement => {
  const classes = useStylesMenu()
  const isCurrent = isCurrentHook(to, uri)
  return (
    <Link
      onClick={() => {
        close()
        setUri(to)
      }}
      to={to}
      className={classes.link}
    >
      <Typography
        className={classNames(classes.text, {
          [classes.current]: isCurrent,
        })}
      >
        {label}
      </Typography>
    </Link>
  )
}
