import { Typography } from "@material-ui/core"
import { SizeMe } from "react-sizeme"
import { graphql } from "gatsby"
import React from "react"
import { PortifolioSwitcher } from "components/PortifolioSwitcher/portifolioSwticher"
import { PortifolioPostBySlugQuery, SitePageContext } from "global"
import YouTube from "react-youtube"
import Box from "@material-ui/core/Box"
import { GridLocal } from "./grid_local"
import ScrollMenu from "react-horizontal-scrolling-menu"
import { LongMontsetrratText } from "components/NewsContent/newsContant"
import { useDynamicImageImport } from "components/HomePage/grid"

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

export const Fullmage = (props: {
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

const ImageScroller = (props: { images: string[] }): React.ReactElement => (
  <ScrollMenu
    alignCenter={false}
    data={props.images.map((el, index) => (
      <div
        key={index}
        className={`menu-item`}
        style={{ background: `url(${el})` }}
      />
    ))}
  />
)

const QuoteComponent = (props: {
  quote: string | undefined | null
  author: string | undefined | null
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
            zIndex: 2,
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
            zIndex: 3,
            display: "flex",
          }}
        >
          {props.quote}
        </Typography>
        <Box css={{ paddingTop: 26, paddingBottom: gutter }}>
          <Typography style={{ textAlign: "center" }}>
            {props.author}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const PortifolioPostTemplate = ({
  data,
  pageContext: { next, previous },
}: Props): React.ReactElement => {
  const gutterVertical = 16
  const image = data?.mdx?.frontmatter?.image || ""
  const image1 = data?.mdx?.frontmatter?.image_1 || ""

  const image2 = data?.mdx?.frontmatter?.image_2 || ""
  const image3 = data?.mdx?.frontmatter?.image_3 || ""
  return (
    <React.Fragment>
      <Box css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}>
        <LongMontsetrratText post={data?.mdx?.frontmatter?.text_1} />
      </Box>
      <YoutubePreview url={data?.mdx?.frontmatter?.youtube} />
      <GridLocal
        left={<LongMontsetrratText post={data?.mdx?.frontmatter?.text_2} />}
        right={<GridImage src={image} />}
      />
      <GridLocal
        left={<GridImage src={image1} />}
        right={<GridImage src={image2} />}
      />
      <Box css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}>
        <LongMontsetrratText post={data?.mdx?.frontmatter?.text_3} />
      </Box>
      <Fullmage paddingTop={gutterVertical} image={image2} />
      <Box css={{ paddingTop: gutterVertical, paddingBottom: gutterVertical }}>
        <LongMontsetrratText post={data?.mdx?.frontmatter?.text_4} />
      </Box>
      <ImageScroller images={[image, image1, image2, image3]} />
      <QuoteComponent
        quote={data?.mdx?.frontmatter?.text_4}
        author={data?.mdx?.frontmatter?.author}
      />
      <PortifolioSwitcher previous={previous} next={next} />
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
        date(formatString: "MMMM DD, YYYY")
        author
        description
        image
        image_1
        image_2
        image_3
        text_1
        text_2
        text_3
        text_4
        youtube
      }
    }
  }
`
