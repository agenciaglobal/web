import { Container, Drawer } from "@material-ui/core"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import React from "react"
import { LanguageSwitcher } from "components/LanguageSwitcher/LanguageSwitcher"
import { ThemeSwitch } from "components/ThemeSwitch/switch"
import { LinkMobileComponent } from "./link"
import { useTranslation } from "react-i18next"

const useStylesV2 = makeStyles((theme: Theme) => ({
  backdrop: {
    opacity: "0 !important",
  },
  box: {
    height: "100%",
    paddingTop: 30,
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
  setUri: React.Dispatch<React.SetStateAction<string>>
  toggleLightMode: () => void
}

export const MobileDrawer = ({
  uri,
  setUri,
  close,
  lightMode,
  open,
  toggleLightMode,
}: Props): React.ReactElement => {
  const { t } = useTranslation()
  const classes = useStylesV2()
  const menus = [
    { to: "/", label: t("sidebar.main") },
    { to: "/about", label: t("sidebar.about") },
    { to: "/news", label: t("sidebar.news") },
    { to: "/team", label: t("sidebar.team") },
    { to: "/clients", label: t("sidebar.client") },
    { to: "/contact", label: t("sidebar.contact") },
  ]
  const theme = useTheme()
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
                setUri={setUri}
                key={index}
                uri={uri}
                to={to}
                label={label}
                close={close}
              />
            ))}
          </Container>
          <Container className={classes.lower}>
            <LanguageSwitcher mode={theme.themeName} />
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
