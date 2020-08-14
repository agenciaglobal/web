import { Box } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { AddressComponent } from "./address"
import { TalkWorkForm } from "./talkWorkForm"
import mapLight from "static/map-light.png"

export const ContactPage = (): React.ReactElement => {
  return (
    <Box>
      <Box style={{ display: "flex", justifyContent: "center", zIndex: 0 }}>
        <img
          style={{
            zIndex: 2,
            // transform: "translate( 0px , -50% )",
          }}
          src={mapLight}
          alt=""
        />
      </Box>
      <Grid container>
        <AddressComponent />
        <TalkWorkForm />
      </Grid>
    </Box>
  )
}
