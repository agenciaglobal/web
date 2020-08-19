/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import { WithGoogleMapProps } from "react-google-maps/lib/withGoogleMap"
import { useTheme } from "@material-ui/core"
import * as React from "react"
import { useState } from "react"
import { lightMap } from "components/ContactPage/light"
import { darkMap } from "components/ContactPage/dark"
import pin from "static/pin.png"

export const ActualGoogleMapsComponent = withScriptjs(
  withGoogleMap((props: WithGoogleMapProps) => {
    console.log(props)
    const theme = useTheme()
    const initialState = {
      markers: [
        { name: "global", position: { lat: -30.018545, lng: -51.207305 } },
      ],
    }
    const [position, setPosition] = useState(initialState)
    const onMarkerDragEnd = (coordinates: any, index: number) => {
      const { latLng } = coordinates
      const lat = latLng.lat()
      const lng = latLng.lng()
      const markers = [...position.markers]
      markers[index] = { ...markers[index], position: { lat, lng } }
      setPosition({ markers })
    }
    const dragend = (index: number) => (t: any, map: any, coordinates: any) =>
      onMarkerDragEnd(coordinates, index)
    const options = theme.themeName === "light" ? lightMap : darkMap
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: -30.018545, lng: -51.207305 }}
        options={options as any}
      >
        {position.markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            draggable={false}
            onDragEnd={dragend(index) as any}
            icon={pin}
          />
        ))}
      </GoogleMap>
    )
  }),
)
