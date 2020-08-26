import React from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

interface Props {
  right: React.ReactElement
  centerRight: React.ReactElement
  centerLeft: React.ReactElement
  left: React.ReactElement
}

export const GridFour = ({
  left,
  centerLeft,
  centerRight,
  right,
}: Props): React.ReactElement => {
  const gutters = 10
  return (
    <Box css={{ paddingTop: 16, paddingBottom: 16 }}>
      <Grid spacing={2} container>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={3}
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
              // paddingRight: gutters,
            }}
          >
            {left}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={3}
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
              // paddingLeft: gutters,
              alignItems: "center",
            }}
          >
            {centerLeft}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={3}
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
              // paddingLeft: gutters,
              alignItems: "center",
            }}
          >
            {centerRight}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={3}
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
              // paddingLeft: gutters,
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
