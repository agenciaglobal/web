import React, { Fragment, useState } from "react"
import { LightMode } from "src/shared/theme"
import { MobileDrawer } from "./mobile/drawer"
import { MobileToolbar } from "./mobile/toolbar"

interface Props {
  lightMode: LightMode
  uri: string
  toggleLightMode: () => void
  onTop: boolean
}

export const LayoutHeaderMobile = ({
  lightMode,
  uri,
  toggleLightMode,
  onTop
}: Props): React.ReactElement => {
  const [open, showNav] = useState(false)
  return (
    <Fragment>
      <MobileToolbar
        uri={uri}
        lightMode={lightMode}
        onClick={() => showNav(!open)}
        open={open}
        onTop={onTop}
      />
      <MobileDrawer
        uri={uri}
        open={open}
        lightMode={lightMode}
        close={() => showNav(!open)}
        toggleLightMode={toggleLightMode}
      />
    </Fragment>
  )
}
