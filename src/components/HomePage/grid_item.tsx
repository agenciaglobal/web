import withWidth, { WithWidthProps } from "@material-ui/core/withWidth"
import { withSize, SizeMeProps } from "react-sizeme"
import { Portifolio } from "components/HomePage/types"
import { Box } from "@material-ui/core"
import TrackVisibility from "react-on-screen"
import { Link } from "gatsby-plugin-react-i18next"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import video from "static/videos/mov-white.mp4"
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
                      style={{
                        backgroundImage: `url(${
                          props.portifolio?.image || ""
                        })`,
                        filter: `blur(${isVisible ? 0 : 3}px)`,
                        // height: height,
                      }}
                    >
                      <ExpandTExt
                        full={true}
                        style={{
                          position: "absolute",
                          top: 0,
                          width: "calc( 100% - 30px )",
                        }}
                        date={date}
                        title={props.portifolio.title || ""}
                        description={props.portifolio.description || ""}
                      />
                    </Box>
                  </React.Fragment>
                )}
                {src !== "" && (
                  <Box
                    style={{
                      display: "flex",
                      filter: `blur(${isVisible ? 0 : 3}px)`,
                    }}
                  >
                    <video
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        width: "100%",
                        // height,
                      }}
                      src={src}
                      muted
                      playsInline
                      autoPlay
                      loop
                    />
                    <ExpandTExt
                      full={true}
                      style={{
                        position: "absolute",
                        top: 0,
                        width: "calc( 100% - 30px )",
                      }}
                      date={date}
                      title={props.portifolio.title || ""}
                      description={props.portifolio.description || ""}
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
