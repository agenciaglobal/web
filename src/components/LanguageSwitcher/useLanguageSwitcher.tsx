import { useI18next } from "gatsby-plugin-react-i18next"

export function useLanguageSwitcher() {
  const { changeLanguage, language } = useI18next()
  const languages = ["pt", "br"]
  return { changeLanguage, language, languages }
}
