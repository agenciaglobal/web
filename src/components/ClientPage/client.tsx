import { Typography } from "@material-ui/core"
import React, { useState } from "react"
import { withSize, SizeMeProps } from "react-sizeme"

interface Props {
  backgroundImage: string
  author_image: string
  author: string
  role: string
  title: string
  job: string
  testimonial: string
}

export const ClientComponent = withSize()(
  ({
    author_image,
    testimonial,
    author,
    role,
    backgroundImage,
    size,
    title,
  }: Props & SizeMeProps): React.ReactElement => {
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
      <div
        onMouseOver={() => {
          if (testimonial) {
            setActive(true)
          } else {
            setHover(true)
          }
        }}
        onMouseLeave={() => {
          if (testimonial) {
            setActive(false)
          } else {
            setHover(false)
          }
        }}
        style={{
          display: "flex",
          // "-webkit-filter": hover ? `grayscale(0%)` : `grayscale(100%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: hover
            ? `grayscale(0%)`
            : active
            ? `grayscale(0%)`
            : `grayscale(100%)`,
          alignItems: "flex-end",
          backgroundImage: `url(${active ? author_image : backgroundImage})`,
          height: (size.width || 150) * (active ? 2 : 1),
        }}
      >
        {active && (
          <div
            style={{
              width: "100%",
              // height: "100%",
              padding: 10,
              zIndex: 12,
              background:
                "linear-gradient(180deg, rgba(140, 140, 140, 0) 18.6%, #3C3C3C 100%)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                zIndex: 11,
                filter: "unset",
                textAlign: "center",
                paddingTop: 200,
              }}
            >
              <svg
                width="35"
                height="27"
                viewBox="0 0 51 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingBottom: 25 }}
              >
                <path
                  d="M0.452149 32.6C0.652149 32.3 1.20215 31.75 2.10215 30.95C3.00215 30.05 3.70215 29.35 4.20215 28.85C4.70215 28.25 5.25215 27.55 5.85215 26.75C6.55215 25.85 7.05215 25 7.35215 24.2C7.65215 23.4 7.80215 22.65 7.80215 21.95C7.80215 20.85 6.55215 19.15 4.05215 16.85C1.55215 14.45 0.302149 11.85 0.302149 9.04999C0.302149 6.55 1.20215 4.45 3.00215 2.74999C4.80215 0.949994 7.00215 0.049994 9.60215 0.049994C13.1021 0.049994 15.8522 1.3 17.8521 3.8C19.8521 6.3 20.8521 9.3 20.8521 12.8C20.8521 22 15.7521 30.3 5.55215 37.7C3.75215 36.1 2.05215 34.4 0.452149 32.6ZM29.7021 32.6C29.9021 32.3 30.4522 31.75 31.3522 30.95C32.2522 30.05 32.9522 29.35 33.4522 28.85C33.9521 28.25 34.5022 27.55 35.1022 26.75C35.8022 25.85 36.3022 25 36.6021 24.2C36.9021 23.4 37.0521 22.65 37.0521 21.95C37.0521 20.85 35.8021 19.15 33.3022 16.85C30.8022 14.45 29.5522 11.85 29.5522 9.04999C29.5522 6.55 30.4522 4.45 32.2522 2.74999C34.0521 0.949994 36.2521 0.049994 38.8522 0.049994C42.3522 0.049994 45.1022 1.3 47.1022 3.8C49.1022 6.3 50.1022 9.3 50.1022 12.8C50.1022 22 45.0022 30.3 34.8022 37.7C33.0022 36.1 31.3021 34.4 29.7021 32.6Z"
                  fill="#FFF"
                />
              </svg>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingBottom: 10,
                }}
              >
                {testimonial}
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 14,
                  fontWeight: "normal",
                  textAlign: "left",
                }}
              >
                {/* {author} | {role}, {title} */}
                Alam Pim | CMO, {title}
              </Typography>
            </div>
          </div>
        )}
      </div>
    )
  },
)
