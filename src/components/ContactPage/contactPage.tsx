import { Box, useTheme } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { AddressComponent } from "./address"
import { TalkWorkForm } from "./talkWorkForm"
import mapLight from "static/map-light.png"
import mapDark from "static/map-dark.png"


export const ContactPage = (): React.ReactElement => {
const theme = useTheme()
const map = theme.themeName == "light" ? mapLight : mapDark
  return (
    <Box>
      <Box style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <img
          style={{
            width: "100%",
            maxHeight: "auto",
            // transform: "translateY(-50%)"
          }}
          src={map}
          alt="map"
        />
      </Box>        
      <Grid container>
        <AddressComponent />
        <TalkWorkForm />
      </Grid>
    </Box>
  )
}
