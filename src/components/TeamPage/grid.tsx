import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import { EmployeeComponent } from "./employer"
import { Employes } from "./types"

const useGridStyles = makeStyles(() => ({
  div: { margin: "20px 0 40px" },
}))

interface Props {
  employees: Employes
}

export const GridEmployees = ({ employees }: Props): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <div className={classes.div}>
      <div className={"grid"}>
        {employees.map(({ node }, index: number) => {
          console.log(node)
          return (
            <EmployeeComponent
              backgroundImage={node.frontmatter.image}
              key={index}
              title={node.frontmatter.name}
              job={node.frontmatter.job}
            />
          )
        })}
      </div>
    </div>
  )
}
