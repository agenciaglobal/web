import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import { GlobalPageTitle } from "components/GlobalPageTitle/globalTitle"
import { ClientGrid } from "./grid"

export const ClientPage = ({
  clients,
}: {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  clients: any[]
}): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <GlobalPageTitle label={t("client")} />
      <ClientGrid clients={clients} />
    </React.Fragment>
  )
}
