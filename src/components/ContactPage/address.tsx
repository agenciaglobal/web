import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import salaGlobal from "../../../static/sala_global.png"

export const AddressComponent = (): React.ReactElement => (
  <Grid
    item={true}
    spacing={0}
    sm={12}
    md={4}
    style={{
      width: "100%",
      justifyContent: "center",
      alignItems: "baseline",
      padding: 0,
    }}
  >
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <img
        style={{
          zIndex: 10,
          transform: "translate( 0px , -50% )",
        }}
        src={salaGlobal}
        alt=""
      />
    </Box>
    <Box
      style={{
        transform: "translate( 0px , -50% )",
        display: "flex",
        justifyContent: "center",
      }}
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
)
