import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import { EmployeeComponent } from "./employer"
import "./index.css"
import Masonry from "react-masonry-css"
import { useState } from "react"

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  clients: any[]
}
const useGridStyles = makeStyles(() => ({ div: { margin: "20px 0 40px" } }))

export const ClientGrid = ({ clients }: Props): React.ReactElement => {
  const classes = useGridStyles()
  const [expanded, setExpanded] = useState(-1)
  return (
    <div className={classes.div}>
      <Masonry
        breakpointCols={{ default: 6, 600: 2, 1300: 4, 1600: 5 }}
        className="global-clients-grid"
        columnClassName="global-clients-grid-column"
        style={{
          marginTop: 24,
          // transform: `translate( -${0}px , -${187}px )`,
        }}
      >
        {clients.map((client, index: number) => {
          console.log(client)
          return (
            <EmployeeComponent
              backgroundImage={client.image}
              author_image={client.author_image}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
              key={index}
              title={client.name}
              testimonial={client.testimonial}
              job={client.description}
            />
          )
        })}
      </Masonry>
    </div>
  )
}
