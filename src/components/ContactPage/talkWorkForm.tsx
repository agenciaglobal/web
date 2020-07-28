import { Tab } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import TextField from "@material-ui/core/TextField"
import * as React from "react"

export const TalkWorkForm = (): React.ReactElement => {
  const [current, setCurrent] = React.useState<number>(0)
  const yellow = "#FFCC00"
  return (
    <Grid style={{ marginTop: 20 }} item={true} spacing={0} sm={12} md={8}>
      <Tabs indicatorColor={yellow} value={current} variant={"fullWidth"}>
        {["Fale com a gente", "Trabalhe aqui"].map((d, index) => (
          <Tab
            style={{
              background: current === index ? yellow : "#E9E9E9",
            }}
            onClick={() => setCurrent(index)}
            key={index}
            label={d}
          />
        ))}
      </Tabs>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log("hello")
        }}
      >
        <Box
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField fullWidth={true} label={"Nome"} />
          <TextField
            style={{ paddingLeft: 8, paddingRight: 8 }}
            fullWidth={true}
            label={"Email"}
          />
          <TextField fullWidth={true} label={"telefone"} />
        </Box>
        <TextField
          style={{
            marginTop: 10,
          }}
          label={"Mensagem"}
          fullWidth={true}
          rows={5}
          multiline={true}
        />
        <Box
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{ backgroundColor: yellow }}
            type={"submit"}
            variant={"contained"}
          >
            ENVIAR
          </Button>
        </Box>
      </form>
    </Grid>
  )
}
