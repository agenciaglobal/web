import { makeStyles, Theme } from "@material-ui/core/styles"

export const useStylesHeader = makeStyles((theme: Theme) => ({
  mobileHeaderContainer: {
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    height: 155,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))
