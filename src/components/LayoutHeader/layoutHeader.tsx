import { Hidden } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { LightMode } from "shared/theme"
import logoblack from "static/global_logo-preto-01.png"
import logo from "static/global_logo-branco-01.png"
import { LanguageSwitcher } from "components/LanguageSwitcher/LanguageSwitcher"
import { TabComponent } from "components/TabComponent/drawerItem"
import useTheme from "@material-ui/core/styles/useTheme"

interface Props {
  lightMode: LightMode
  uri: string
  setUri: React.Dispatch<React.SetStateAction<string>>
}

export const LayoutHeader = ({ setUri, uri }: Props): React.ReactElement => {
  const { t } = useI18next()
  const theme = useTheme()
  const mode =
    uri.includes("/portifolio")
      ? "dark"
      : uri.includes("/contact")
      ? theme.themeName === "light"
        ? "dark"
        : "light"
      : theme.themeName
  return (
    <Hidden smDown>
      <AppBar
        position="static"
        style={{
          height: 155,
          minHeight: 155,
          backgroundColor: mode === "light" ? "#fff" : "#000",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            zIndex: 1,
            height: 155,
            minHeight: 155,
            display: "flex",
            padding: "0px 120px",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ boxShadow: "none" }} to="/">
            <img
              onClick={() => setUri("/")}
              src={mode === "light" ? logoblack : logo}
              alt="logo-black"
              style={{ margin: "16px 0px 0px 0px", height: 30 }}
            />
          </Link>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <ul
              style={{
                color: "#AAA",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                margin: "18px 0px 0px",
                paddingInlineStart: 0,
              }}
            >
              <TabComponent
                setUri={setUri}
                uri={uri}
                to={"/"}
                label={t("sidebar.main")}
                mode={
                  uri.includes("/portifolio/")
                    ? "dark"
                    : uri.includes("/contact")
                    ? theme.themeName === "light"
                      ? "dark"
                      : "light"
                    : theme.themeName
                }
              />
              <TabComponent
                setUri={setUri}
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
                setUri={setUri}
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
                setUri={setUri}
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
                setUri={setUri}
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
                setUri={setUri}
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
                style={{ marginLeft: 24 }}
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
          </Box>
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}
