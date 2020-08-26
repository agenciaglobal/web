import { Typography, WithWidthProps } from "@material-ui/core"
import React, { useState } from "react"
import withWidth from "@material-ui/core/withWidth"
import { withSize, SizeMeProps } from "react-sizeme"

interface Props {
  backgroundImage: string
  blackBackgroundImage: string
  title: string
  job: string
}

export const EmployeeComponent = withSize()(
  ({
    size,
    blackBackgroundImage,
    backgroundImage,
    job,
    title,
  }: Props & SizeMeProps): React.ReactElement => {
    const [hover, setHover] = useState(false)
    const image = backgroundImage || ""
    const bwImage = blackBackgroundImage || ""
    return (
      <div
        onMouseLeave={() => setHover(false)}
        onMouseOver={() => setHover(true)}
        style={{
          display: "flex",
          // "-webkit-filter": hover ? `grayscale(0%)` : `grayscale(100%)`,
          filter: hover ? `grayscale(0%)` : `grayscale(100%)`,
          alignItems: "flex-end",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: hover ? `url(${image})` : `url(${bwImage})`,
          height: size.width || 150,
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: hover ? "rgba(255, 204, 0, 0.7)" : "transparent",
            padding: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              zIndex: 3,
              filter: "unset",
            }}
          >
            <Typography
              style={{
                fontFamily: "GSTwo",
                fontSize: 20,
                color: hover ? "#000" : "transparent",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
            <Typography
              style={{
                fontFamily: "GSThree",
                fontSize: 14,
                color: hover ? "#000" : "transparent",
                textAlign: "center",
              }}
            >
              {job}
            </Typography>
          </div>
        </div>
      </div>
    )
  },
)
