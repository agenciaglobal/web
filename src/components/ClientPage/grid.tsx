import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import { ClientComponent } from "./client"
import "./index.css"
import Masonry from "react-masonry-css"

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  clients: any[]
}
const useGridStyles = makeStyles(() => ({ div: { margin: "20px 0 40px" } }))

export const ClientGrid = ({ clients }: Props): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <div className={classes.div}>
      <Masonry
        breakpointCols={{ default: 6, 600: 2, 1300: 4, 1600: 5 }}
        className="global-clients-grid"
        columnClassName="global-clients-grid-column"
        style={{
          marginTop: 24,
          paddingBottom: 120,
          // transform: `translate( -${0}px , -${187}px )`,
        }}
      >
        {clients.map((client, index: number) => {
          console.log(client)
          return (
            <ClientComponent
              author={client.author}
              role={client.role}
              backgroundImage={client.image}
              author_image={client.author_image}
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
