import { Box, Typography } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import Masonry from "react-masonry-css"
import { Portifolio } from "./types"
import { useVisibility } from "shared/useVisibility"

interface Props {
  projects: { [key: string]: Portifolio[] }
  value: string
}

const useGridStyles = makeStyles(() => ({
  box: { width: "100%", paddingBottom: 300, paddingTop: 30 },
}))

function NewComponent(props: { tile: Portifolio }) {
  const [isFirstVisible, firstRef] = useVisibility<HTMLDivElement>(0)

  const path = props.tile?.image || ""
  console.log(isFirstVisible)
  return (
    <Link style={{ textDecoration: "none" }} to={props.tile.slug}>
      <div
        ref={firstRef}
        style={{
          height: 0,
          paddingBottom: "75%",
          backgroundImage: `url(${path})`,
          filter: `blur(${isFirstVisible ? 0 : 5}px)`,
        }}
      >
        <Box style={{ padding: "15px" }}>
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "GSThree",
            }}
          >
            {(isFirstVisible ? "yay" : "sad") + props.tile.title}
          </Typography>
          <Typography style={{}}>{props.tile.description}</Typography>
        </Box>
      </div>
    </Link>
  )
}

export const HomeGrid = ({ projects, value }: Props): React.ReactElement => {
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
              .filter((tile) => tile.categorie === value)
              .map((tile, idx) => {
                return <NewComponent key={idx} tile={tile} />
              })}
          </Masonry>
        )
      })}
    </Box>
  )
}
