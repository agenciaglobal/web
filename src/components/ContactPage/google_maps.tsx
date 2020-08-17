import { withWidth, WithWidthProps } from "@material-ui/core"
import * as React from "react"
import { useExtrapolatedMargin } from "../../templates/portifolio-post"
import { ActualGoogleMapsComponent } from "components/ContactPage/actual_google_maps"

export const GoogleMaps = withWidth()(
  (props: WithWidthProps): React.ReactElement => {
    const margin = useExtrapolatedMargin({ width: props.width })
    // noinspection SpellCheckingInspection
    // key global
    const token = "AIzaSyBiygZFJYhD2KViFDBWQAO_6Ndys86xAys"
    return (
      <ActualGoogleMapsComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${token}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              transform: `translate( -${margin}px , -${187}px )`,
              width: `calc( 100% + ${2 * margin}px)`,
              height: `500px`,
              maxHeight: `50vh`,
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  },
)
