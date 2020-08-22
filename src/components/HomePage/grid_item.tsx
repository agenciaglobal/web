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
          console.log(props.portifolio.title + " " + date)
          return (
            <Link style={{ textDecoration: "none" }} to={props.portifolio.slug}>
              <div style={{}}>
                {src === "" && (
                  <React.Fragment>
                    <Box
                      id="image"
                      style={{
                        backgroundImage: `url(${
                          props.portifolio?.image || ""
                        })`,
                        filter: `blur(${isVisible ? 0 : 0}px)`,
                      }}
                    >
                      <ExpandTextHome
                        full={true}
                        style={{
                          position: "absolute",
                          top: 0,
                          width: "calc( 100% - 44px )",
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
                      display: "flex",
                      filter: `blur(${isVisible ? 0 : 0}px)`,
                      width: "100%",
                    }}
                  >
                    <video
                      style={{
                        objectFit: "cover",
                        // maxWidth: "100%",
                        width: "100%",
                        height: "100%"
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
                        width: "calc( 100% - 44px )",
                      }}
                      date={date}
                      title={props.portifolio.title || ""}
                      description={props.portifolio.description || ""}
                      categorie={props.portifolio.categorie || ""}
                    />
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
