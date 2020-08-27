import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { darkTheme } from "shared/dark"
import { lightTheme } from "shared/light"
import { LightMode } from "shared/theme"
import "./global.css"
import { ActualLayout } from "./main"
import { Helmet } from "react-helmet"

interface Props {
  uri: string
  children: React.ReactElement
}

const Layout = ({ children, uri }: Props): React.ReactElement => {
  const [mode, setMode] = React.useState<LightMode>("dark")
  return (
    <div>
      <Helmet>
        <title>global.tt</title>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(function () { emailjs.init("user_t127MAqmhCkHL5pHqI4Mc") })()',
          }}
        />
      </Helmet>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <ActualLayout
          uri={uri}
          lightMode={mode}
          toggleLightMode={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {children}
        </ActualLayout>
      </ThemeProvider>
    </div>
  )
}

export default Layout
