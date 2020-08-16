import { Box } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { AddressComponent } from "./address"
import { TalkWorkForm } from "./talkWorkForm"
import { GoogleMaps } from "components/ContactPage/google_maps"

export const ContactPage = (): React.ReactElement => {
  return (
    <Box>
      <GoogleMaps />
      <div style={{ transform: "translateY( -187px )" }}>
        <Grid container>
          <AddressComponent />
          <TalkWorkForm />
        </Grid>
      </div>
    </Box>
  )
}
