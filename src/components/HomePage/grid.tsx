import { Box } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { GridItem } from "components/HomePage/grid_item"
import * as React from "react"
import Masonry from "react-masonry-css"
import { Portifolio } from "./types"

interface Props {
  projects: { [key: string]: Portifolio[] }
  value: string
}

const useGridStyles = makeStyles(() => ({
  box: { width: "100%", paddingBottom: 100, paddingTop: 30 },
}))

export const HomeGrid = ({ projects }: Props): React.ReactElement => {
  const classes = useGridStyles()

  return (
    <Box className={classes.box}>
      {Object.keys(projects).map((key, index) => {
        const inner: Portifolio[] = projects[key.toString()]
        return (
          <Masonry
            key={index}
            breakpointCols={{ default: 2, 700: 1, 1300: 2 }}
            className="global-home-grid"
            columnClassName="global-home-grid-column"
          >
            {inner
              // .filter((tile) => tile.categorie === value)
              .map((tile, idx) => (
                <GridItem key={idx} portifolio={tile} index={idx} />
              ))}
          </Masonry>
        )
      })}
    </Box>
  )
}
