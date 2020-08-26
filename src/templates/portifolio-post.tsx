import {
  isWidthDown,
  isWidthUp,
  Typography,
  WithWidthProps,
} from "@material-ui/core"
import { SizeMe } from "react-sizeme"
import { graphql } from "gatsby"
import React from "react"
import { PortifolioSwitcher } from "components/PortifolioSwitcher/portifolioSwticher"
import { PortifolioPostBySlugQuery, SitePageContext } from "global"
import YouTube from "react-youtube"
import Box from "@material-ui/core/Box"
import { GridLocal } from "./grid_local"
import { GridSix } from "./grid_six"
import { GridFour } from "./grid_four"
import ScrollMenu from "react-horizontal-scrolling-menu"
import {
  LongMontsetrratText,
  notEmpty,
} from "components/NewsContent/newsContant"
import withWidth from "@material-ui/core/withWidth"
import { MarkDownRenderer } from "components/MarkDownRenderer/markDownRenderer"
import { ArrowRight, ArrowLeft } from "@material-ui/icons"

interface Props {
  data?: PortifolioPostBySlugQuery
  pageContext: SitePageContext
}

// use an actual url library
const extractIdFromUrl = (data: string | null | undefined) =>
  data?.replace("https://www.youtube.com/watch?v=", "")

const YoutubePreview = ({
  url,
}: {
  url: string | null | undefined
}): React.ReactElement => (
  <SizeMe monitorHeight={true}>
    {({ size }) => (
      <YouTube
        opts={{
          width: size.width?.toString(),
          height: "500",
        }}
        videoId={extractIdFromUrl(url)}
      />
    )}
  </SizeMe>
)

const GridImage = (props: { src: string }): React.ReactElement => (
  <img
    style={{
      minWidth: "100%",
      minHeight: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
    }}
    src={props.src}
    alt=""
  />
)

export const FullImage = (props: {
  paddingTop: number
  image: string
}): React.ReactElement => (
  <Box
    css={{
      paddingTop: props.paddingTop,
      paddingBottom: props.paddingTop,
      minHeight: 400,
      backgroundImage: `url(${props.image})`,
      backgroundSize: "cover",
    }}
  />
)

const ImageScrollerhe = (props: { images: string[] }): React.ReactElement => (
  <ScrollMenu
    arrowLeft={<ArrowLeft />}
    arrowRight={<ArrowRight />}
    alignCenter={false}
    data={props.images.map((el, index) => (
      <div
        key={index}
        className={`menu-item`}
        style={{
          background: `url(${el})`,
        }}
      />
    ))}
  />
)

const ImageScroller = withWidth()(
  (
    props: {
      images: string[]
    } & WithWidthProps,
  ): React.ReactElement => {
    const isDesktop = isWidthUp("md", props.width || "md")
    return (
      <ScrollMenu
        arrowLeft={isDesktop ? <ArrowLeft /> : null}
        arrowRight={isDesktop? <ArrowRight /> : null}
        alignCenter={false}
        wheel={isDesktop ? false : true}
        data={props.images.map((el, index) => (
            <div
              key={index}
              className={`menu-item`}
              style={{
                background: `url(${el})`,
              }}
            />
        ))}
      />
    )
  },
)

const QuoteComponent = (props: {
  quote: string | undefined | null
  author: string | undefined | null
  client: string | undefined | null
  role: string | undefined | null
}): React.ReactElement => {
  const gutter = 24
  return (
    <Box css={{ paddingTop: 56, paddingBottom: gutter }}>
      <Box
        style={{
          position: "relative",
        }}
        css={{
          paddingLeft: "30%",
          paddingRight: "30%",
        }}
      >
        <svg
          style={{
            position: "absolute",
            marginTop: "30px",
            zIndex: -1,
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
          width="51"
          height="38"
          viewBox="0 0 51 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.452149 32.6C0.652149 32.3 1.20215 31.75 2.10215 30.95C3.00215 30.05 3.70215 29.35 4.20215 28.85C4.70215 28.25 5.25215 27.55 5.85215 26.75C6.55215 25.85 7.05215 25 7.35215 24.2C7.65215 23.4 7.80215 22.65 7.80215 21.95C7.80215 20.85 6.55215 19.15 4.05215 16.85C1.55215 14.45 0.302149 11.85 0.302149 9.04999C0.302149 6.55 1.20215 4.45 3.00215 2.74999C4.80215 0.949994 7.00215 0.049994 9.60215 0.049994C13.1021 0.049994 15.8522 1.3 17.8521 3.8C19.8521 6.3 20.8521 9.3 20.8521 12.8C20.8521 22 15.7521 30.3 5.55215 37.7C3.75215 36.1 2.05215 34.4 0.452149 32.6ZM29.7021 32.6C29.9021 32.3 30.4522 31.75 31.3522 30.95C32.2522 30.05 32.9522 29.35 33.4522 28.85C33.9521 28.25 34.5022 27.55 35.1022 26.75C35.8022 25.85 36.3022 25 36.6021 24.2C36.9021 23.4 37.0521 22.65 37.0521 21.95C37.0521 20.85 35.8021 19.15 33.3022 16.85C30.8022 14.45 29.5522 11.85 29.5522 9.04999C29.5522 6.55 30.4522 4.45 32.2522 2.74999C34.0521 0.949994 36.2521 0.049994 38.8522 0.049994C42.3522 0.049994 45.1022 1.3 47.1022 3.8C49.1022 6.3 50.1022 9.3 50.1022 12.8C50.1022 22 45.0022 30.3 34.8022 37.7C33.0022 36.1 31.3021 34.4 29.7021 32.6Z"
            fill="#DDDDDD"
          />
        </svg>
        <Typography
          style={{
            zIndex: 99,
            display: "flex",
            fontStyle: "italic",
            fontWeight: 200,
            lineHeight: "32px",
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {props.quote}
        </Typography>

        <Box css={{ paddingTop: 16, paddingBottom: gutter }}>
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {props.author} | {props.role}
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "GSThree",
              fontSize: 14,
              lineHeight: "32px",
            }}
          >
            {props.client}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export const useExtrapolatedMargin = (props: WithWidthProps): number => {
  const isDesktop = isWidthUp("md", props.width || "xs")
  const isXS = isWidthDown("xs", props.width || "xs")
  console.log(isXS)
  return isDesktop ? 120 : isXS ? 16 : 24
}

export const MainTranslatedImage = withWidth()(
  (
    props: {
      image: string
      title?: React.ReactElement
    } & WithWidthProps,
  ): React.ReactElement => {
    const margin = useExtrapolatedMargin({ width: props.width })
    const isDesktop = isWidthUp("md", props.width || "md")
    return (
      <Box
        css={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `calc( 100% + ${2 * margin}px)`,
          transform: `translate( -${margin}px , -${isDesktop ? 187 : 187}px )`,
        }}
      >
        {props.title}
      </Box>
    )
  },
)

const MainText = withWidth()(
  ({
    width,
    title,
    subtitle,
  }: { title: string; subtitle: string } & WithWidthProps) => {
    const isDesktop = isWidthUp("md", width || "xs")
    return (
      <Box
        style={{
          width: `${isDesktop ? 50 : 100}%`,
        }}
      >
        <Typography
          style={{
            fontSize: `${isDesktop ? 50 : 36}px`,
            textAlign: "center",
            fontFamily: "GSThree",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            fontSize: `${isDesktop ? 30 : 24}px`,
            textAlign: "center",
            fontFamily: "GSTwo",
            color: "#fff",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    )
  },
)

const PortifolioPostTemplate = ({
  data,
  pageContext: { next, previous },
}: Props): React.ReactElement => {
  const x = data?.mdx?.frontmatter
  const tValues = [
    x?.image_7,
    x?.image_8,
    x?.image_9,
    x?.image_10,
    x?.image_11,
    x?.image_12,
    x?.image_13,
    x?.image_14,
    x?.image_15,
    x?.image_16,
  ]
    .filter(notEmpty)
    .filter((imge) => imge !== "")
  return (
    <React.Fragment>
      <MainTranslatedImage
        title={
          <MainText title={x?.title || ""} subtitle={x?.description || ""} />
        }
        image={x?.image || ""}
      />
      <div style={{ transform: "translateY( -187px )" }}>
        <Box>
          <LongMontsetrratText post={x?.text_1} />
        </Box>
        {/* YOUTUBE */}
        {x?.youtube && x?.youtube !== "" && <YoutubePreview url={x?.youtube} />}
        {/* GRID 1 */}
        {x?.image_1 && x?.text_2 && x?.image_1 !== "" && x?.text_2 !== "" && (
          <GridLocal
            right={<GridImage src={x?.image_1 || ""} />}
            left={<LongMontsetrratText post={x?.text_2} />}
          />
        )}
        {/* MARKDOWN */}
        <MarkDownRenderer body={data?.mdx?.body || ""} />
        {/* GRID 2 */}
        {x?.image_2 && x?.image_3 && x?.image_2 !== "" && x?.image_3 !== "" && (
          <GridLocal
            left={<GridImage src={x?.image_2 || ""} />}
            right={<GridImage src={x?.image_3 || ""} />}
          />
        )}
        {/* TEXT 2 */}
        {x?.text_3 && (
          <Box>
            <LongMontsetrratText post={x?.text_3} />
          </Box>
        )}
        {/* GRID 3 */}
        {x?.image_4 && x?.image_5 && (
          <GridLocal
            left={<GridImage src={x?.image_4 || ""} />}
            right={<GridImage src={x?.image_5 || ""} />}
          />
        )}
        {/* TEXT 3 */}
        {x?.text_4 !== "" && x?.text_4 && (
          <Box>
            <LongMontsetrratText post={x?.text_4} />
          </Box>
        )}
        {/* IMAGE WIDE */}
        {x?.image_3 && <FullImage paddingTop={0} image={x?.image_6 || ""} />}
        {/* TEXT 4 */}
        {x?.text_5 && (
          <Box>
            <LongMontsetrratText post={x?.text_5} />
          </Box>
        )}
        {/* CARROSSEL */}
        {tValues.length >= 4 && <ImageScroller images={tValues} />}
        {/* TEXTO 5 */}
        {x?.text_6 && x?.text_6 !== "" && (
          <Box>
            <LongMontsetrratText post={x?.text_6} />
          </Box>
        )}
        {/* GRID 4 : 6 IMAGENS*/}
        {x?.image_17 &&
          x?.image_18 &&
          x?.image_19 &&
          x?.image_20 &&
          x?.image_21 &&
          x?.image_22 && (
            <GridSix
              leftTop={<GridImage src={x?.image_17 || ""} />}
              middleTop={<GridImage src={x?.image_18 || ""} />}
              rightTop={<GridImage src={x?.image_19 || ""} />}
              leftBottom={<GridImage src={x?.image_20 || ""} />}
              middleBottom={<GridImage src={x?.image_21 || ""} />}
              rightBottom={<GridImage src={x?.image_22 || ""} />}
            />
          )}
        {/* TEXTO 6 */}
        {x?.text_7 && (
          <Box>
            <LongMontsetrratText post={x?.text_7} />
          </Box>
        )}
        {/* GRID 5 : 4 IMAGENS*/}
        {x?.image_23 && x?.image_24 && x?.image_25 && x?.image_26 && (
          <GridFour
            left={<GridImage src={x?.image_23 || ""} />}
            centerLeft={<GridImage src={x?.image_24 || ""} />}
            centerRight={<GridImage src={x?.image_25 || ""} />}
            right={<GridImage src={x?.image_26 || ""} />}
          />
        )}
        {/* QUOTE */}
        {x?.testimonial &&
          x?.testimonial !== "" &&
          x?.author &&
          x?.author !== "" &&
          x?.role &&
          x?.role !== "" && (
            <QuoteComponent
              quote={x?.testimonial}
              author={x?.author}
              role={x?.role}
              client={data?.mdx?.frontmatter?.description}
            />
          )}
        <PortifolioSwitcher previous={previous} next={next} />
      </div>
    </React.Fragment>
  )
}

export default PortifolioPostTemplate

export const pageQuery = graphql`
  query PortifolioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        categorie
        image
        cover_image
        video
        text_1
        youtube
        image_1
        text_2
        image_2
        image_3
        text_3
        image_4
        image_5
        text_4
        image_6
        text_5
        image_7
        image_8
        image_9
        image_10
        image_11
        image_12
        image_13
        image_14
        image_15
        image_16
        image_17
        image_18
        image_19
        image_20
        image_21
        image_22
        image_23
        image_24
        image_25
        image_26
        text_6
        text_7
        testimonial
        author
        role
      }
    }
  }
`
