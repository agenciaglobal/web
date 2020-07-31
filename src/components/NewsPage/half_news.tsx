import { Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import * as classNames from "classnames"
import * as React from "react"
import { ExpandTExt } from "./full_news"

const useStylesClose = makeStyles((theme: Theme) => ({
  base: {
    display: "flex",
    height: 300,
    position: "relative",
  },
  full: {
    height: 350,
  },
  right: {
    left: "unset !important",
    right: "0px !important",
  },
  mirror: {
    height: "100%",
  },
  half: {
    height: "70%",
  },
  image: {
    width: "45%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "purple",
  },
  textbox: {
    border: "3px solid",
    borderColor: theme.palette.primary.contrastText,
    position: "absolute",
    backgroundColor: theme.palette.primary.main,
    width: "40%",
    top: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    right: 0,
  },
  text: {
    padding: 5,
    fontFamily: "GSThree",
    fontSize: "20px",
    color: theme.palette.primary.contrastText,
  },
}))

interface Props {
  description: string
  date: string
  onClick: () => Promise<void>
  title: string
  type: "MIRROR" | "HALF" | "LEFT" | "RIGHT" | "QUOTE"
  require1: any
}

export const HalNewsComponent = (props: Props) => {
  const classes = useStylesClose()
  return (
    <div
      onClick={props.onClick}
      className={classNames({
        [classes.base]: true,
        [classes.full]: ["HALF"].includes(props.type),
      })}
    >
      <div style={{ marginBottom: 20 }}>
        {!["QUOTE"].includes(props.type) && (
          <div
            className={classNames({
              [classes.image]: true,
              [classes.mirror]: ["MIRROR", "LEFT", "RIGHT"].includes(
                props.type,
              ),
              [classes.right]: ["RIGHT"].includes(props.type),
              [classes.half]: ["HALF"].includes(props.type),
            })}
            style={{ backgroundImage: `url(${props.require1})` }}
          >
            <ExpandTExt
              date={props.date}
              title={props.title}
              description={props.description}
            />
          </div>
        )}
        {!["LEFT", "RIGHT"].includes(props.type) && (
          <div
            className={classNames({
              [classes.textbox]: true,
              [classes.mirror]: ["MIRROR", "QUOTE"].includes(props.type),
              [classes.half]: ["HALF"].includes(props.type),
            })}
          >
            <Typography
              style={{ wordWrap: "break-word" }}
              className={classes.text}
              noWrap={false}
            >
              {props.description}
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}
