import { makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: `155px`,
  },
  contact: {
    marginTop: `400px`,
  },
  scrolled: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 140,
      paddingRight: 140,
    },
  },
  wrapper: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  mobileHeaderContainer: {
    // backgroundColor: theme.palette.primary.main,
  },
}))
