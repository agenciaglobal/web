import { Box, withWidth, WithWidthProps } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { AddressComponent } from "./address"
import { TalkWorkForm } from "./talkWorkForm"
import mapGlobal from "static/map.png"
import {
  MainTranslatedImage,
  useExtrapolatedMargin,
} from "../../templates/portifolio-post"
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps"
import { WithGoogleMapProps } from "react-google-maps/lib/withGoogleMap"

const NewComponent = withScriptjs(
  withGoogleMap((props: WithGoogleMapProps) => {
    console.log(props)
    return (
      <GoogleMap
        defaultZoom={20}
        defaultCenter={{ lat: -30.0185442, lng: -51.209478 }}
      >
        <Marker position={{ lat: -30.0185442, lng: -51.209478 }} />
      </GoogleMap>
    )
  }),
)

const Cesco = withWidth()(
  (props: WithWidthProps): React.ReactElement => {
    const margin = useExtrapolatedMargin({ width: props.width })
    return (
      <NewComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyCtMJUB8zK6Thy4FPgGNCzDrgR0_IEcbmQ"}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              transform: `translate( -${margin}px , -${187}px )`,
              width: `calc( 100% + ${2 * margin}px)`,
              height: `500px`,
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  },
)

export const ContactPage = (): React.ReactElement => {
  return (
    <Box>
      <Cesco />
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
