import { Box } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { AddressComponent } from "./address"
import { TalkWorkForm } from "./talkWorkForm"

export const ContactPage = (): React.ReactElement => {
  return (
    <Box>
      <Grid container>
        <AddressComponent />
        <TalkWorkForm />
      </Grid>
    </Box>
  )
}
