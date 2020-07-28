import { makeStyles, Theme } from "@material-ui/core/styles"
import * as cs from "classnames"
import React from "react"

const useStylesClose = makeStyles((theme: Theme) => ({
  divIconCommon: {
    background: theme.palette.grey.A100,
    width: 24,
    height: 3,
    transition: "transform 500ms",
  },
  divIconOpen: {
    // background: theme.palette.secondary.main,
    width: 24,
    height: 3,
    "&:first-child": {
      transform: "translateY(6px) rotate(45deg)",
    },
    "&:nth-child(2)": {
      opacity: 0,
    },
    "&:nth-child(3)": {
      transform: "translateY(-6px) rotate(-45deg)",
    },
  },
  menuIcon: {
    width: 24,
    height: 19,
    display: "flex",
    background: "transparent",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "none !important",
    outline: "none !important",
    boxShadow: "none !important",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    zIndex: 3,
  },
}))
export const CloseButton = (props: {
  open: boolean
  onClick: () => void
}): React.ReactElement => {
  const classes = useStylesClose()
  const { divIconCommon, divIconOpen, menuIcon } = classes
  const className = cs({ [divIconCommon]: true, [divIconOpen]: props.open })
  return (
    <button className={menuIcon} onClick={props.onClick}>
      <div className={className} />
      <div className={className} />
      <div className={className} />
    </button>
  )
}
