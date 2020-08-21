import React from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

interface Props {
  right: React.ReactElement
  left: React.ReactElement
}

export const GridLocal = ({ left, right }: Props): React.ReactElement => {
  return (
    <Box css={{ paddingTop: 16, paddingBottom: 16 }}>
      <Grid spacing={2} container>
        <Grid
          item={true}
          sm={12}
          md={6}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            css={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {left}
          </Box>
        </Grid>
        <Grid
          item={true}
          sm={12}
          md={6}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <Box
            css={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {right}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
