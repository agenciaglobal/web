import { Container, Drawer, Hidden, Fade } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { TabComponent } from "components/TabComponent/drawerItem"

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      // zIndex: -2,
      background: "transparent",
      height: "100vh",
      // marginBottom: 155,
      width: 120,
      border: "none",
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: 110,
    },
    container: {
      zIndex: 3,
      display: "flex",
      alignItems: "center",
      transform: "rotate(-90deg)",
    },
    list: {
      color: "#AAA",
      listStyle: "none",
      display: "flex",
      justifyContent: "space-evenly",
      margin: "16px 16px 16px 80px",
    },
  }),
)

export const RightDrawer = ({
  uri,
  scrolled,
}: {
  uri: string
  scrolled: boolean
}): React.ReactElement | null => {
  const classes = useStyles()
  const { t } = useI18next()
  const drawerClasses = { paper: classes.drawerPaper }
  return scrolled ? (
    <React.Fragment>
      <Hidden smDown>
        <Drawer variant="permanent" anchor="right" classes={drawerClasses}>
          <Container className={classes.container}>
            <Fade in={scrolled} timeout={1000}>
              <ul className={classes.list}>
                <TabComponent uri={uri} to={"/"} label={t("sidebar.main")} />
                <TabComponent
                  uri={uri}
                  to={"/about"}
                  label={t("sidebar.about")}
                />
                <TabComponent uri={uri} to={"/news"} label={t("sidebar.news")} />
                <TabComponent uri={uri} to={"/team"} label={t("sidebar.team")} />
                <TabComponent
                  uri={uri}
                  to={"/clients"}
                  label={t("sidebar.client")}
                />
                <TabComponent
                  uri={uri}
                  to={"/contact"}
                  label={t("sidebar.contact")}
                />
              </ul>
            </Fade>
          </Container>
        </Drawer>
      </Hidden>
    </React.Fragment>
  ) : null
}
