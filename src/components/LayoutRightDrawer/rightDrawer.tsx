import {
  Container,
  Drawer,
  Fade,
  isWidthUp,
  WithWidthProps,
} from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import { TabComponent } from "components/TabComponent/drawerItem"
import withWidth from "@material-ui/core/withWidth"

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

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  uri: string
  scrolled: boolean
}

export const RightDrawer = withWidth()(
  ({
    open,
    setOpen,
    uri,
    width,
    scrolled,
  }: Props & WithWidthProps): React.ReactElement | null => {
    const classes = useStyles()
    const { t } = useTranslation()
    const drawerClasses = { paper: classes.drawerPaper }
    const isDesktop = isWidthUp("md", width || "xs")
    const visible = open || (isDesktop && scrolled)
    return isDesktop ? (
      <React.Fragment>
        <Drawer
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          variant="permanent"
          anchor="right"
          classes={drawerClasses}
        >
          <Container className={classes.container}>
            <Fade in={visible}>
              <ul
                className={classes.list}
                style={{
                  visibility: visible ? "unset" : "hidden",
                }}
              >
                <TabComponent uri={uri} to={"/"} label={t("sidebar.main")} />
                <TabComponent
                  uri={uri}
                  to={"/about"}
                  label={t("sidebar.about")}
                />
                <TabComponent
                  uri={uri}
                  to={"/news"}
                  label={t("sidebar.news")}
                />
                <TabComponent
                  uri={uri}
                  to={"/team"}
                  label={t("sidebar.team")}
                />
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
      </React.Fragment>
    ) : null
  },
)
