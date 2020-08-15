import { Box } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { AddressComponent } from "./address"
import { TalkWorkForm } from "./talkWorkForm"
import mapGlobal from "static/map.png"
import { MainTranslatedImage } from "../../templates/portifolio-post"

export const ContactPage = (): React.ReactElement => {
  return (
    <Box>
      <MainTranslatedImage image={mapGlobal} />

      <div
        style={{
          transform: "translateY( -187px )",
        }}
      >
        <Grid container>
          <AddressComponent />
          <TalkWorkForm />
        </Grid>
      </div>
    </Box>
  )
}
