import { makeStyles } from "@material-ui/core/styles"

export const useAboutSvgStyles = makeStyles(() => ({
  container: { marginTop: 24, paddingTop: 60 },
  style: {
    fontFamily: "GSThree",
    fontSize: "24px",
    lineHeight: "50px",
    textAlign: "center",
    "@media (min-width:600px)": {
      fontSize: "50px",
      lineHeight: "50px",
      textAlign: "left",
    },
  },
  another: {
    fontFamily: "GSTwo",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    "@media (min-width:600px)": {
      fontSize: "16px",
      lineHeight: "50px",
      textAlign: "left",
    },
  },
  box: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30px",
  },
}))
