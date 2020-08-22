import { useI18next } from "gatsby-plugin-react-i18next"
import React, { Fragment } from "react"
import { Container } from "@material-ui/core"
import { ThemeSwitch } from "components/ThemeSwitch/switch"
import { LightMode } from "shared/theme"
import {
  LanguageSwitcher,
  SupportedLanguages,
} from "components/LanguageSwitcher/LanguageSwitcher"

interface Props {
  lightMode: LightMode
  toggleLightMode: () => void
}

const componentes = ({
  lightMode,
  toggleLightMode,
}: Props): React.ReactElement => {
  const { changeLanguage, language } = useI18next()
  return (
    <Fragment>
      <Container style={{ display: "flex", justifyContent: "space-evenly" }}>
        <LanguageSwitcher
          language={language as SupportedLanguages}
          changeLanguage={changeLanguage}
        />
        <ThemeSwitch lightMode={lightMode} toggleLightMode={toggleLightMode} />
      </Container>
    </Fragment>
  )
}

export default componentes
