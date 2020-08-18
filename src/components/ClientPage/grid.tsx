import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import { ClientComponent } from "./client"
import "./index.css"

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  clients: any[]
}
const useGridStyles = makeStyles(() => ({ div: { margin: "20px 0 40px" } }))

export const ClientGrid = ({ clients }: Props): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <div className={classes.div}>
      <div className={"grid-client"}>
        {clients.map((client, index: number) => {
          return (
            <ClientComponent
              backgroundImage={client.image}
              key={index}
              title={client.name}
              job={client.description}
            />
          )
        })}
      </div>
    </div>
  )
}
