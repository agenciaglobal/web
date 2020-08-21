import React, { PropsWithChildren } from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

interface Props {
  leftTop: React.ReactElement
  middleTop: React.ReactElement
  rightTop: React.ReactElement
  leftBottom: React.ReactElement
  middleBottom: React.ReactElement
  rightBottom: React.ReactElement
}

export const GridSix = ({
  leftTop,
  middleTop,
  rightTop,
  leftBottom,
  middleBottom,
  rightBottom,
}: Props): React.ReactElement => {
  return (
    <Box css={{ paddingTop: 16, paddingBottom: 16 }}>
      <Grid spacing={2} container>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={4}
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
            {leftTop}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={4}
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
            {middleTop}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={4}
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
            {rightTop}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={4}
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
            {leftBottom}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={4}
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
            {middleBottom}
          </Box>
        </Grid>
        <Grid
          item={true}
          xs={6}
          sm={6}
          md={4}
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
            {rightBottom}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
