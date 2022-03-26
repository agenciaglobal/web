import { Box } from "@material-ui/core"
import withWidth, { WithWidthProps } from "@material-ui/core/withWidth"
import { Portifolio } from "components/HomePage/types"
import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { useState } from "react"
import TrackVisibility from "react-on-screen"
import { SizeMeProps, withSize } from "react-sizeme"
import { ExpandTextHome } from "./expand_text_home"

interface Props {
  index: number
  portifolio: Portifolio
}

export const GridItem = withWidth()(
  withSize()((props: Props & WithWidthProps & SizeMeProps) => {
    const src = props.portifolio.video || ""
    const [hover, setHover] = useState(false)
    return (
      <TrackVisibility offset={props.index === 0 ? 300 : 200}>
        {({ isVisible }: { isVisible: boolean }) => {
          const date = props.portifolio?.date || ""
          return (
            <Link style={{ textDecoration: "none" }} to={props.portifolio.slug}>
              <div
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {src === "" && (
                  <React.Fragment>
                    <Box
                      id="image"
                      style={{
                        backgroundImage: `url(${
                          props.portifolio?.cover_image || ""
                        })`,
                        filter: `saturate(${hover ? 100 : 80}%)`,
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 0,
                        paddingBottom: "75%",
                        transform: hover ? "scale(103%)" : "scale(100%)",
                        WebkitTransform: hover ? "scale(1.03)" : "scale(1)",
                        OTransform: hover ? "scale(1.03)" : "scale(1)",
                        transition: "all 400ms",
                      }}
                    >
                      <ExpandTextHome
                        full={true}
                        style={{
                          position: "absolute",
                          top: 0,
                          width: "100%",
                        }}
                        date={date}
                        title={props.portifolio.title || ""}
                        description={props.portifolio.description || ""}
                        categorie={props.portifolio.categorie || ""}
                      />
                    </Box>
                  </React.Fragment>
                )}
                {src !== "" && (
                  <Box
                    onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                      width: "100%",
                      height: 0,
                      paddingBottom: "75%",
                      position: "relative",
                      transform: hover ? "scale(103%)" : "scale(100%)",
                      WebkitTransform: hover ? "scale(1.03)" : "scale(1)",
                      OTransform: hover ? "scale(1.03)" : "scale(1)",
                      transition: "all 400ms",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        filter: `saturate(${hover ? 100 : 80}%)`,
                        transition: "filter 400ms",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                      }}
                    >
                      <video
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src={src}
                        muted
                        playsInline
                        autoPlay
                        loop
                      />
                      <ExpandTextHome
                        full={true}
                        style={{
                          position: "absolute",
                          top: 0,
                          width: "100%",
                        }}
                        date={date}
                        title={props.portifolio.title || ""}
                        description={props.portifolio.description || ""}
                        categorie={props.portifolio.categorie || ""}
                      />
                    </Box>
                  </Box>
                )}
              </div>
            </Link>
          )
        }}
      </TrackVisibility>
    )
  }),
)
