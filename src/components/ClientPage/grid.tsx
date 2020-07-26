import * as React from "react"
import { EmployeeComponent } from "./employer"
import "./index.css"

interface Props {
  clients: any[]
}

export const ClientGrid = ({ clients }: Props) => {
  return (
    <div style={{ margin: "20px 0 40px" }}>
      <div className={"grid-client"}>
        {clients.map((client, index: number) => {
          return (
            <EmployeeComponent
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
