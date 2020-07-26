import { Container, Drawer } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher"
import { ThemeSwitch } from "../../ThemeSwitch/switch"
import { LinkMobileComponent } from "./link"

const useStylesV2 = makeStyles((theme: Theme) => ({
  backdrop: {
    opacity: "0 !important",
  },
  drawer: {
    marginTop: 155,
    boxShadow: "none",
    height: "calc( 100vh - 155px )",
    backgroundColor: theme.palette.primary.main,
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
  },
  lower: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "40px 16px",
  },
}))

interface Props {
  close: () => void
  open: boolean
  lightMode: "light" | "dark"
  toggleLightMode: () => void
}

export const MobileDrawer = ({
  close,
  lightMode,
  open,
  toggleLightMode,
}: Props): React.ReactElement => {
  const { t } = useI18next()
  const classes = useStylesV2()
  const menus = [
    { to: "/", label: t("sidebar.main") },
    { to: "/about", label: t("sidebar.about") },
    { to: "/contact", label: t("sidebar.contact") },
    { to: "/team", label: t("sidebar.team") },
    { to: "/clients", label: t("sidebar.clients") },
    { to: "/news", label: t("sidebar.news") },
  ]
  return (
    <Drawer
      anchor={"right"}
      classes={{ paper: classes.drawer }}
      onClose={close}
      BackdropProps={{ className: classes.backdrop }}
      onBackdropClick={close}
      open={open}
    >
      <Container>
        {menus.map(({ label, to }, index) => (
          <LinkMobileComponent
            key={index}
            to={to}
            label={label}
            close={close}
          />
        ))}
      </Container>
      <Container className={classes.lower}>
        <LanguageSwitcher />
        <ThemeSwitch lightMode={lightMode} toggleLightMode={toggleLightMode} />
      </Container>
    </Drawer>
  )
}
