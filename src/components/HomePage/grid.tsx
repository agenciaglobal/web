import { Box, Typography } from "@material-ui/core"
import TrackVisibility from "react-on-screen"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import Masonry from "react-masonry-css"
import { Portifolio } from "./types"

interface Props {
  projects: { [key: string]: Portifolio[] }
  value: string
}

const useGridStyles = makeStyles(() => ({
  box: { width: "100%", paddingBottom: 300, paddingTop: 30 },
}))

function NewComponent(props: { index: number; tile: Portifolio }) {
  // const [isFirstVisible, firstRef] = useVisibility<HTMLDivElement>(0)

  // const firstRef = useRef(null)
  // const isFirstVisible = useVisibility(firstRef.current)
  const path = props.tile?.image || ""
  return (
    <TrackVisibility offset={props.index === 0 ? 300 : 200}>
      {({ isVisible }: { isVisible: boolean }) => {
        console.log(isVisible)
        return (
          <Link style={{ textDecoration: "none" }} to={props.tile.slug}>
            <div style={{}}>
              <Box
                style={{
                  backgroundImage: `url(${path})`,
                  filter: `blur(${isVisible ? 0 : 3}px)`,
                  padding: "15px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "20px",
                    fontFamily: "GSThree",
                  }}
                >
                  {(isVisible ? "yay" : "sad") + props.tile.title}
                </Typography>
                <Typography style={{}}>{props.tile.description}</Typography>
              </Box>
            </div>
          </Link>
        )
      }}
    </TrackVisibility>
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
                return <NewComponent key={idx} tile={tile} index={idx} />
              })}
          </Masonry>
        )
      })}
    </Box>
  )
}
