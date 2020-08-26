import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"
import { EmployeeComponent } from "./employer"
import { Employees } from "./types"
import Masonry from "react-masonry-css"

const useGridStyles = makeStyles(() => ({
  div: { paddingTop: 50, paddingBottom: 300 },
}))

interface Props {
  employees: Employees
}

export const GridEmployees = ({ employees }: Props): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <div className={classes.div}>
      <Masonry
        breakpointCols={{ default: 6, 600: 2, 1300: 4, 1600: 5 }}
        className="global-team-grid"
        columnClassName="global-team-grid-column"
        style={{
          marginTop: 24,
          paddingBottom: 120,
          // transform: `translate( -${0}px , -${187}px )`,
        }}
      >
        {employees.map(({ node }, index: number) => {
          return (
            <EmployeeComponent
              backgroundImage={node.frontmatter?.image || ""}
              blackBackgroundImage={node.frontmatter?.black_image || ""}
              key={index}
              title={node.frontmatter?.name || ""}
              job={node.frontmatter?.job || ""}
            />
          )
        })}
      </Masonry>
    </div>
  )
}
