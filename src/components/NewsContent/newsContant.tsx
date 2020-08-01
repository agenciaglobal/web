import Typography from "@material-ui/core/Typography"
import React from "react"
import { Props } from "./props"

export const NewsContent = (props: Props) => {
  console.log(props)
  console.log(props.current.frontmatter.title)
  return (
    <React.Fragment>
      <Typography>newss</Typography>
      <Typography>{props.current.frontmatter.title}</Typography>
      <Typography style={{ display: `block` }}>
        {props.current.frontmatter.date}
      </Typography>
    </React.Fragment>
  )
}
