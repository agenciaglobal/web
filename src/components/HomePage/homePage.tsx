import * as React from "react"
import { HomeGrid } from "./grid"
import "./index.css"
import { HomeTitleComponent } from "./title"
import { Portifolio } from "./types"

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  all: any[]
  projects: { [key: string]: Portifolio[] }
  categories: string[]
}

export const HomePage = ({
  categories,
  projects,
}: Props): React.ReactElement => {
  // const [val, setVal] = React.useState<number>(0)
  // categories = categories.sort((a) =>
  //   a.toLowerCase().startsWith("f") ? -1 : 1,
  // )
  return (
    <React.Fragment>
      <HomeTitleComponent />
      {/* <Hidden smDown>
        <DesktopTabs setValue={setVal} value={val} categories={categories} />
      </Hidden>
      <Hidden mdUp>
        <MobileSelect setValue={setVal} value={val} categories={categories} />
      </Hidden> */}
      <HomeGrid
        projects={projects}
        // value={categories[val]}
      />
    </React.Fragment>
  )
}
