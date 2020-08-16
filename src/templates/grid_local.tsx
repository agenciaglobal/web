import React from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

interface Props {
  right: React.ReactElement
  left: React.ReactElement
}

export const GridLocal = ({ left, right }: Props): React.ReactElement => {
  const gutters = 10
  return (
    <Box css={{ paddingTop: 16, paddingBottom: 16 }}>
      <Grid container>
        <Grid
          item={true}
          sm={12}
          md={6}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Box
            css={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: gutters,
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
            padding: 0,
          }}
        >
          <Box
            css={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              paddingLeft: gutters,
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
