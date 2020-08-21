import { Hidden } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { LightMode } from "shared/theme"
import logoblack from "static/logo-black.png"
import logo from "static/logo-white.png"
import {
  LanguageSwitcher,
  SuporttedLanguages,
} from "components/LanguageSwitcher/LanguageSwitcher"
import { TabComponent } from "components/TabComponent/drawerItem"
import useTheme from "@material-ui/core/styles/useTheme"

interface Props {
  lightMode: LightMode
  uri: string
  hide: boolean
}

export const LayoutHeader = ({ hide, uri }: Props): React.ReactElement => {
  const { changeLanguage, language, t } = useI18next()
  const theme = useTheme()
  const mode =
    uri.includes("/contact") ||
    uri.includes("/portifolio") ||
    uri.includes("/news/")
      ? theme.themeName === "light"
        ? "dark"
        : "light"
      : theme.themeName
  return (
    <Hidden smDown>
      <AppBar
        position="static"
        style={{
          // height: isContact ? 400 : 155,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            zIndex: 1,
            display: "flex",
            padding: "0px 120px",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ boxShadow: "none" }} to="/">
            <img
              src={mode === "light" ? logoblack : logo}
              alt="logo-black"
              style={{ margin: "32px 32px 0px 0px", height: 100 }}
            />
          </Link>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            {!hide && (
              <ul
                style={{
                  color: "#AAA",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingTop: 16,
                  margin: "18px 0px 0px",
                }}
              >
                <TabComponent
                  uri={uri}
                  to={"/"}
                  label={t("sidebar.main")}
                  mode={
                    uri.includes("/contact") ||
                    uri.includes("/portifolio") ||
                    uri.includes("/news/")
                      ? "dark"
                      : theme.themeName
                  }
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/contact") ||
                    uri.includes("/portifolio") ||
                    uri.includes("/news/")
                      ? "dark"
                      : theme.themeName
                  }
                  to={"/about"}
                  label={t("sidebar.about")}
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/contact") ||
                    uri.includes("/portifolio") ||
                    uri.includes("/news/")
                      ? "dark"
                      : theme.themeName
                  }
                  to={"/news"}
                  label={t("sidebar.news")}
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/contact") ||
                    uri.includes("/portifolio") ||
                    uri.includes("/news/")
                      ? "dark"
                      : theme.themeName
                  }
                  to={"/team"}
                  label={t("sidebar.team")}
                />
                <TabComponent
                  uri={uri}
                  mode={
                    uri.includes("/contact") ||
                    uri.includes("/portifolio") ||
                    uri.includes("/news/")
                      ? "dark"
                      : theme.themeName
                  }
                  to={"/clients"}
                  label={t("sidebar.client")}
                />
                <TabComponent
                  uri={uri}
                  to={"/contact"}
                  label={t("sidebar.contact")}
                />
                <br />
                <LanguageSwitcher
                  language={language as SuporttedLanguages}
                  changeLanguage={changeLanguage}
                  style={{ paddingLeft: 24 }}
                />
              </ul>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}
