import { Typography, Hidden, makeStyles } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import salaGlobal from "static/sala_global.png"

const useStyles = makeStyles(() => ({
  style: {
    display: "flex",
    justifyContent: "center",
    "@media (min-width:950px)": {
      transform: "translate( 0px , -75% )",
    },
  },
}))

export const AddressComponent = (): React.ReactElement => {
const classes = useStyles()
  return (
  <Grid
    item={true}
    sm={12}
    md={4}
    style={{
      width: "100%",
      justifyContent: "center",
      alignItems: "baseline",
      padding: 0,
      marginBottom: -90,
    }}
  >
    <Hidden smDown>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            zIndex: 10,
            transform: "translate( 0px , -50% )",
          }}
          src={salaGlobal}
          alt="global"
        />
      </Box>
    </Hidden>
    <Box
      className={classes.style}
    >
      <Box style={{ paddingTop: 32, paddingBottom: 32 }}>
        <Typography>Rua Câncio Gomes, 609</Typography>
        <Typography>Fábrica do Futuro</Typography>
        <Typography>Porto Alegre, RS, Brasil</Typography>
        <Typography>902220-060</Typography>
        <Typography>+55 51 3378.2100</Typography>
      </Box>
    </Box>
  </Grid>
)}
