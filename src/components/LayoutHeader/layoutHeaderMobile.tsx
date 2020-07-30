import React, { Fragment, useState } from "react"
import { LightMode } from "src/shared/theme"
import { MobileDrawer } from "./mobile/drawer"
import { MobileToolbar } from "./mobile/toolbar"

interface Props {
  lightMode: LightMode
  toggleLightMode: () => void
}

export const LayoutHeaderMobile = ({
  lightMode,
  uri,
  toggleLightMode,
}: Props): React.ReactElement => {
  const [open, showNav] = useState(false)
  return (
    <Fragment>
      <MobileToolbar
        uri={uri}
        lightMode={lightMode}
        onClick={() => showNav(!open)}
        open={open}
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
