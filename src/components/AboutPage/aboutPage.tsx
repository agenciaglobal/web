import * as React from "react"
import { AboutAccordion } from "./accordion"
import { MainAboutText } from "./main"
import { SVGAbout } from "./svg_about"

export const AboutPage = (): React.ReactElement => (
  <div style={{ flexGrow: 1, paddingTop: 30 }}>
    <MainAboutText />
    <SVGAbout />
    <AboutAccordion />
  </div>
)
