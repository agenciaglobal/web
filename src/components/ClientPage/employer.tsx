import { Typography } from "@material-ui/core"
import React, { useState } from "react"
import { withSize, SizeMeProps } from "react-sizeme"

interface Props {
  backgroundImage: string
  author_image: string
  title: string
  job: string
  index: number
  expanded: number
  testimonial: string
  setExpanded: React.Dispatch<React.SetStateAction<number>>
}

export const EmployeeComponent = withSize()(
  ({
    expanded,
    author_image,
    index,
    setExpanded,
    testimonial,
    backgroundImage,
    size,
    title,
  }: Props & SizeMeProps): React.ReactElement => {
    const [hover, setHover] = useState(false)
    const isExapanded = expanded === index
    return (
      <div
        onClick={() => {
          if (testimonial) {
            setExpanded(isExapanded ? -1 : index)
          }
        }}
        onMouseLeave={() => setHover(false)}
        onMouseOver={() => setHover(true)}
        style={{
          display: "flex",
          // "-webkit-filter": hover ? `grayscale(0%)` : `grayscale(100%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: hover ? `grayscale(0%)` : `grayscale(100%)`,
          alignItems: "flex-end",
          backgroundImage: `url(${
            isExapanded ? author_image : backgroundImage
          })`,
          height: (size.width || 150) * (isExapanded ? 2 : 1),
        }}
      >
        {hover && (
          <div
            style={{
              width: "100%",
              backgroundColor: hover ? "yellow" : "transparent",
              padding: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                zIndex: 3,
                filter: "unset",
                backgroundColor: hover ? "yellow" : "transparent",
              }}
            >
              <Typography style={{ color: "black", textAlign: "center" }}>
                {isExapanded ? testimonial : title}
              </Typography>
              {/*<Typography style={{ color: "black", textAlign: "center" }}>*/}
              {/*  {job}*/}
              {/*</Typography>*/}
            </div>
          </div>
        )}
      </div>
    )
  },
)
