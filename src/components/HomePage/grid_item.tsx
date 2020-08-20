import withWidth, { WithWidthProps } from "@material-ui/core/withWidth"
import { withSize, SizeMeProps } from "react-sizeme"
import { Portifolio } from "components/HomePage/types"
import { isWidthDown, Box } from "@material-ui/core"
import TrackVisibility from "react-on-screen"
import { Link } from "gatsby-plugin-react-i18next"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import video from "static/videos/mov-white.mp4"
import * as React from "react"

export const GridItem = withWidth()(
  withSize()(
    (
      props: { index: number; tile: Portifolio } & WithWidthProps & SizeMeProps,
    ) => {
      const isXS = isWidthDown("xs", props.width || "xs")
      const src = props.tile.video || ""
      const height = ((props.size?.width || 400) * (isXS ? 16 : 9)) / 16
      return (
        <TrackVisibility offset={props.index === 0 ? 300 : 200}>
          {({ isVisible }: { isVisible: boolean }) => {
            const date = props.tile?.date || ""
            console.log(props.tile.title + " " + date)
            return (
              <Link style={{ textDecoration: "none" }} to={props.tile.slug}>
                <div style={{ height }}>
                  {src === "" && (
                    <React.Fragment>
                      <Box
                        style={{
                          backgroundImage: `url(${props.tile?.image || ""})`,
                          filter: `blur(${isVisible ? 0 : 3}px)`,
                          height: height,
                        }}
                      >
                        <ExpandTExt
                          style={{
                            position: "absolute",
                            top: 0,
                            width: "calc( 100% - 30px )",
                          }}
                          date={date}
                          title={props.tile.title || ""}
                          description={props.tile.description || ""}
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
                          height,
                        }}
                        src={src}
                        muted
                        playsInline
                        autoPlay
                        loop
                      />
                      <ExpandTExt
                        style={{
                          position: "absolute",
                          top: 0,
                          width: "calc( 100% - 30px )",
                        }}
                        date={date}
                        title={props.tile.title || ""}
                        description={props.tile.description || ""}
                      />
                    </Box>
                  )}
                </div>
              </Link>
            )
          }}
        </TrackVisibility>
      )
    },
  ),
)
