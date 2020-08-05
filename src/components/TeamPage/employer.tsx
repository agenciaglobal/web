import { Typography } from "@material-ui/core"
import React, { useState } from "react"

interface Props {
  backgroundImage: string
  blackBackgroundImage: string
  title: string
  job: string
}

export const EmployeeComponent = ({
  blackBackgroundImage,
  backgroundImage,
  job,
  title,
}: Props): React.ReactElement => {
  const [hover, setHover] = useState(false)
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
        backgroundImage: hover
          ? `url(${require("../../../content/" + blackBackgroundImage)})`
          : `url(${require("../../../content/" + backgroundImage)})`,
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
          <Typography style={{
            fontFamily: "GSTwo",
            fontSize: 20,
            color: hover ? "#000" : "transparent", 
            textAlign: "center" 
          }}>
            {title}
          </Typography>
          <Typography style={{ 
            fontFamily: "GSThree",
            fontSize: 14,
            color: hover ? "#000" : "transparent", 
            textAlign: "center" 
          }}>
            {job}
          </Typography>
        </div>
      </div>
    </div>
  )
}
