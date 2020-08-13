import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import * as React from "react"
import { useAboutSvgStyles } from "./about_styles"
import { LightMode } from "shared/theme"
import video from "../../../static/videos/mov.mp4"
import videoDark from "../../../static/videos/mov-dark.mp4"

interface Props {
  lightMode: LightMode
}

export const SVGAbout = ({ lightMode }: Props): React.ReactElement => {
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
        <video
          src={lightMode == "light" ? video : videoDark}
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
