import { makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: `40px`,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 120,
      paddingRight: 120,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "unset",
      paddingLeft: 120,
      paddingRight: 120,
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: 120,
      paddingRight: 120,
    },
  },
  contact: {
    marginTop: `400px`,
  },
  scrolled: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 120,
      paddingRight: 120,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "unset",
      paddingLeft: 120,
      paddingRight: 120,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "unset",
      paddingLeft: 120,
      paddingRight: 120,
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
