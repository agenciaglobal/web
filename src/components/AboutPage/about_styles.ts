import { makeStyles } from "@material-ui/core/styles"

export const useAboutSvgStyles = makeStyles(() => ({
  container: { marginTop: 24 },
  style: {
    fontFamily: "GSOne",
    fontSize: "30px",
    lineHeight: "50px",
    fontWeight: 700,
  },
  another: {
    fontFamily: "GSOne",
    fontSize: "16px",
    lineHeight: "50px",
    fontWeight: 500,
  },
  box: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
  },
}))
