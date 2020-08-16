import { Container, Drawer } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import {
  LanguageSwitcher,
  SuporttedLanguages,
} from "components/LanguageSwitcher/LanguageSwitcher"
import { ThemeSwitch } from "components/ThemeSwitch/switch"
import { LinkMobileComponent } from "./link"

const useStylesV2 = makeStyles((theme: Theme) => ({
  backdrop: {
    opacity: "0 !important",
  },
  box: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: theme.custom.greyAlpha2,
    display: "flex",
    justifyContent: "space-between",
  },
  drawer: {
    boxShadow: "none",
    height: "-webkit-fill-available",
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "transparent",
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
  uri: string
  close: () => void
  open: boolean
  lightMode: "light" | "dark"
  toggleLightMode: () => void
}

export const MobileDrawer = ({
  uri,
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
    { to: "/clients", label: t("sidebar.client") },
    { to: "/news", label: t("sidebar.news") },
  ]
  const { changeLanguage, language } = useI18next()
  return (
    <React.Fragment>
      <Drawer
        anchor={"bottom"}
        classes={{ paper: classes.drawer }}
        onClose={close}
        BackdropProps={{ className: classes.backdrop }}
        onBackdropClick={close}
        open={open}
      >
        <div onClick={close} style={{ height: 155 }} />
        <Container classes={{ root: classes.box }}>
          <Container>
            {menus.map(({ label, to }, index) => (
              <LinkMobileComponent
                key={index}
                uri={uri}
                to={to}
                label={label}
                close={close}
              />
            ))}
          </Container>
          <Container className={classes.lower}>
            <LanguageSwitcher
              language={language as SuporttedLanguages}
              changeLanguage={changeLanguage}
            />
            <ThemeSwitch
              lightMode={lightMode}
              toggleLightMode={toggleLightMode}
            />
          </Container>
        </Container>
      </Drawer>
    </React.Fragment>
  )
}
