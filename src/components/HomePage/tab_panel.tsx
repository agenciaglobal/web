import { Box } from "@material-ui/core"
import * as React from "react"

interface Props {
  children: React.ReactElement
  value: number
  index: number
}

export const TabPanel = ({
  children,
  index,
  value,
}: Props): React.ReactElement => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}
