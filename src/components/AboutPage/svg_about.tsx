import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import * as React from "react"
import { useAboutSvgStyles } from "./about_styles"
// import { SVGGlobalCool } from "./svg"
import video from "../../../static/videos/mov.mp4"

export const SVGAbout = (): React.ReactElement => {
  const classes = useAboutSvgStyles()
  return (
    <Box className={classes.container}>
      <Box lineHeight={3}>
        <Typography className={classes.style}>COMO NÓS TRABALHAMOS</Typography>
      </Box>
      <Box lineHeight={3}>
        <Typography className={classes.another}>
          Módulos integrados de trabalho para atender marcas contemporâneas
        </Typography>
      </Box>
      <Box className={classes.box}>
        {/* <SVGGlobalCool/> */}
        <video
          src={video}
          autoPlay
          loop
          style={{ maxWidth: 900, width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  )
}
