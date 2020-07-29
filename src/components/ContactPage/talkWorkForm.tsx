import { Tab, Theme } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import TextField from "@material-ui/core/TextField"
import * as React from "react"

const yellow = "#FFCC00"

const useStyles = makeStyles((theme: Theme) => ({
  email: { paddingLeft: 8, paddingRight: 8 },
  margin: {
    marginTop: 10,
  },
  button: { backgroundColor: theme.palette.secondary.main },
  box: {
    marginTop: 24,
    display: "flex",
    justifyContent: "space-between",
  },
  bcontainer: {
    paddingTop: 24,
    display: "flex",
    justifyContent: "flex-end",
  },
  grid: { marginTop: 20 },
}))

export const TalkWorkForm = (): React.ReactElement => {
  const classes = useStyles()
  const [current, setCurrent] = React.useState<number>(0)
  return (
    <Grid className={classes.grid} item={true} spacing={0} sm={12} md={8}>
      <Tabs indicatorColor={yellow} value={current} variant={"fullWidth"}>
        {["Fale com a gente", "Trabalhe aqui"].map((d, index) => (
          <Tab
            style={{ background: current === index ? yellow : "#E9E9E9" }}
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
        <Box className={classes.box}>
          <TextField fullWidth={true} label={"Nome"} />
          <TextField
            className={classes.email}
            fullWidth={true}
            label={"Email"}
          />
          <TextField fullWidth={true} label={"telefone"} />
        </Box>
        <TextField
          className={classes.margin}
          label={"Mensagem"}
          fullWidth={true}
          rows={5}
          multiline={true}
        />
        <Box className={classes.bcontainer}>
          <Button
            className={classes.button}
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
