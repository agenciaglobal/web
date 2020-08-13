import { makeStyles } from "@material-ui/core/styles"

export const useAboutSvgStyles = makeStyles(() => ({
  container: { marginTop: 24, paddingTop: 80 },
  style: {
    fontFamily: "GSThree",
    fontSize: "50px",
    lineHeight: "50px",
    fontWeight: 700,
  },
  another: {
    fontFamily: "GSTwo",
    fontSize: "16px",
    lineHeight: "50px",
    fontWeight: 500,
  },
  box: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30px",
  },
}))
