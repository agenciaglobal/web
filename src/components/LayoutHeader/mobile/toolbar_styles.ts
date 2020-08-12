import { makeStyles } from "@material-ui/core/styles"

export const useStylesHeader = makeStyles(() => ({
  mobileHeaderContainer: {
    position: "fixed",
    top: 0,
    height: 155,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))
