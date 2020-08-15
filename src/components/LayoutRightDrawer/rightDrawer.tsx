import { Container, Drawer, Hidden } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
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
  const drawerClasses = { paper: classes.drawerPaper }
  return scrolled ? (
    <React.Fragment>
      <Hidden smDown>
        <Drawer variant="permanent" anchor="right" classes={drawerClasses}>
          <Container className={classes.container}>
            <ul className={classes.list}>
              <TabComponent page={"/"} uri={uri} label={"WORKS"} />
              <TabComponent page={"/about"} uri={uri} label={"ABOUT"} />
              <TabComponent page={"/news"} uri={uri} label={"NEWS"} />
              <TabComponent page={"/team"} uri={uri} label={"TEAM"} />
              <TabComponent page={"/clients"} uri={uri} label={"CLIENTES"} />
              <TabComponent page={"/contact"} uri={uri} label={"CONTACT"} />
            </ul>
          </Container>
        </Drawer>
      </Hidden>
    </React.Fragment>
  ) : null
}
