import { Typography, useTheme } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import * as React from "react"
import { useAboutSvgStyles } from "./about_styles"
import video from "../../../static/videos/mov-white.mp4"
import videoDark from "../../../static/videos/mov-dark.mp4"

export const SVGAbout = (): React.ReactElement => {
  const classes = useAboutSvgStyles()
  const theme = useTheme()
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
        <video
          src={theme.themeName == "light" ? video : videoDark}
          muted
          playsInline
          autoPlay
          loop
          style={{ maxWidth: 900, width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  )
}
