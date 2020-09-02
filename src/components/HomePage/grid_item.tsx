import withWidth, { WithWidthProps } from "@material-ui/core/withWidth"
import { withSize, SizeMeProps } from "react-sizeme"
import { Portifolio } from "components/HomePage/types"
import { Box } from "@material-ui/core"
import TrackVisibility from "react-on-screen"
import { Link } from "gatsby-plugin-react-i18next"
import { ExpandTextHome } from "./expand_text_home"
import * as React from "react"

interface Props {
  index: number
  portifolio: Portifolio
}

export const GridItem = withWidth()(
  withSize()((props: Props & WithWidthProps & SizeMeProps) => {
    const src = props.portifolio.video || ""
    return (
      <TrackVisibility offset={props.index === 0 ? 300 : 200}>
        {({ isVisible }: { isVisible: boolean }) => {
          const date = props.portifolio?.date || ""
          return (
            <Link style={{ textDecoration: "none" }} to={props.portifolio.slug}>
              <div style={{}}>
                {src === "" && (
                  <React.Fragment>
                    <Box
                      id="image"
                      style={{
                        backgroundImage: `url(${
                          props.portifolio?.cover_image || ""
                        })`,
                        // filter: `blur(${isVisible ? 0 : 0}px)`,
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 0,
                        paddingBottom: "75%",
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
                    style={{
                      width: "100%",
                      height: 0,
                      paddingBottom: "75%",
                      position: "relative",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        filter: `blur(${isVisible ? 0 : 0}px)`,
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
