import { Hidden } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { LightMode } from "shared/theme"
import logoblack from "static/logo-black.png"
import logo from "static/logo-white.png"
// import logoblack from "static/global_logo-preto-01.png"
// import logo from "static/global_logo-branco-01.png"
import {
  LanguageSwitcher,
  SupportedLanguages,
} from "components/LanguageSwitcher/LanguageSwitcher"
import { TabComponent } from "components/TabComponent/drawerItem"
import useTheme from "@material-ui/core/styles/useTheme"

interface Props {
  lightMode: LightMode
  uri: string
  hide: boolean
  leftHover: boolean
  rightHover: boolean
}

function extracted(hide: boolean, leftHover: boolean) {
  if (leftHover) return false
  // let newVar = !hide && leftHover
  return !hide
}

export const LayoutHeader = ({
  leftHover,
  rightHover,
  hide,
  uri,
}: Props): React.ReactElement => {
  const { changeLanguage, language, t } = useI18next()
  const theme = useTheme()
  const mode =
    uri.includes("/portifolio") || uri.includes("/news/")
      ? "dark"
      : uri.includes("/contact")
      ? theme.themeName === "light"
        ? "dark"
        : "light"
      : theme.themeName
  console.log(hide, leftHover)
  const isLogoVisible = extracted(hide, leftHover)
  const isTabsVisible = extracted(hide, rightHover)
  return (
    <Hidden smDown>
      <AppBar
        position="static"
        style={{
          height: 155,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            zIndex: 1,
            height: 155,
            display: "flex",
            padding: "0px 120px",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ boxShadow: "none" }} to="/">
            {isLogoVisible && (
              <img
                src={mode === "light" ? logoblack : logo}
                alt="logo-black"
                style={{ margin: "16px 0px 0px 0px", height: 30 }}
              />
            )}
          </Link>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {isTabsVisible && (
              <ul
                style={{
                  color: "#AAA",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-evenly",
                  margin: "18px 0px 0px",
                }}
              >
                <TabComponent
                  uri={uri}
                  to={"/"}
                  label={t("sidebar.main")}
                  mode={
                    uri.includes("/portifolio") || uri.includes("/news/")
                      ? "dark"
                      : uri.includes("/contact")
                      ? theme.themeName === "light"
                        ? "dark"
                        : "light"
                      : theme.themeName
                  }
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/portifolio") || uri.includes("/news/")
                      ? "dark"
                      : uri.includes("/contact")
                      ? theme.themeName === "light"
                        ? "dark"
                        : "light"
                      : theme.themeName
                  }
                  to={"/about"}
                  label={t("sidebar.about")}
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/portifolio") || uri.includes("/news/")
                      ? "dark"
                      : uri.includes("/contact")
                      ? theme.themeName === "light"
                        ? "dark"
                        : "light"
                      : theme.themeName
                  }
                  to={"/news"}
                  label={t("sidebar.news")}
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/portifolio") || uri.includes("/news/")
                      ? "dark"
                      : uri.includes("/contact")
                      ? theme.themeName === "light"
                        ? "dark"
                        : "light"
                      : theme.themeName
                  }
                  to={"/team"}
                  label={t("sidebar.team")}
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/portifolio") || uri.includes("/news/")
                      ? "dark"
                      : uri.includes("/contact")
                      ? theme.themeName === "light"
                        ? "dark"
                        : "light"
                      : theme.themeName
                  }
                  to={"/clients"}
                  label={t("sidebar.client")}
                />
                <TabComponent
                  uri={uri}
                  to={"/contact"}
                  label={t("sidebar.contact")}
                  mode={
                    uri.includes("/portifolio") || uri.includes("/news/")
                      ? "dark"
                      : uri.includes("/contact")
                      ? theme.themeName === "light"
                        ? "dark"
                        : "light"
                      : theme.themeName
                  }
                />
                <br />
                <LanguageSwitcher
                  language={language as SupportedLanguages}
                  changeLanguage={changeLanguage}
                  style={{ paddingLeft: 24 }}
                  mode={
                    uri.includes("/portifolio") || uri.includes("/news/")
                      ? "dark"
                      : uri.includes("/contact")
                      ? theme.themeName === "light"
                        ? "dark"
                        : "light"
                      : theme.themeName
                  }
                />
              </ul>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}
