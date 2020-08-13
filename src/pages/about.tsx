import * as React from "react"
import { AboutPage } from "components/AboutPage/aboutPage"
import { useTheme } from "@material-ui/core"

const About = (): React.ReactElement => {
  const theme = useTheme()
  return <AboutPage lightMode={theme.themeName} />
}

export default About
