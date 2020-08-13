import { Hidden } from "@material-ui/core"
import * as React from "react"
import { alphabetically } from "shared/alphabetically"
import { HomeGrid } from "./grid"
import "./index.css"
import { DesktopTabs } from "./select_desktop"
import { MobileSelect } from "./select_mobile"
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
  const [val, setVal] = React.useState<number>(0)
  categories = categories.sort(alphabetically)
  console.log(projects, categories)
  return (
    <React.Fragment>
      <HomeTitleComponent />
      <Hidden smDown>
        <DesktopTabs setValue={setVal} value={val} categories={categories} />
      </Hidden>
      <Hidden smUp>
        <MobileSelect setValue={setVal} value={val} categories={categories} />
      </Hidden>
      <HomeGrid projects={projects} value={categories[val]} />
    </React.Fragment>
  )
}
