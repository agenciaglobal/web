import { Tab, Theme } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import TextField from "@material-ui/core/TextField"
import * as React from "react"
import { ChangeEvent } from "react"
import { Field, Formik } from "formik"

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
  grid: { marginTop: 20, padding: 24 },
}))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const emailjs: any

type FormValues = {
  msg: string
  phone: string
  name: string
  email: string
}

const initialValues: FormValues = {
  email: "",
  name: "",
  phone: "",
  msg: "",
}

export const TalkWorkForm = (): React.ReactElement => {
  const classes = useStyles()
  const [current, setCurrent] = React.useState<number>(0)
  return (
    <Grid className={classes.grid} item={true} sm={12} md={8}>
      <Tabs indicatorColor={"primary"} value={current} variant={"fullWidth"}>
        {["Fale com a gente", "Trabalhe aqui"].map((d, index) => (
          <Tab
            style={{ background: current === index ? yellow : "#E9E9E9" }}
            onClick={() => setCurrent(index)}
            key={index}
            label={d}
          />
        ))}
      </Tabs>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          if (
            values.name !== "" &&
            values.email !== "" &&
            values.phone !== "" &&
            values.msg !== ""
          ) {
            await emailjs.send(
              "gmail",
              "template_IMAOpHqW",
              { ...values, type: current === 0 ? "talk" : "work" },
              "user_XvcHLrQfd3bHgGYyGtdCm",
            )
            console.log("hello")
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            resetForm(initialValues as any)
          }
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box className={classes.box}>
                <Field
                  value={values.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("name", e.target.value)
                  }}
                  as={TextField}
                  fullWidth={true}
                  label={"Nome"}
                />
                <Field
                  as={TextField}
                  className={classes.email}
                  fullWidth={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("email", e.target.value)
                  }}
                  value={values.email}
                  label={"Email"}
                />
                <Field
                  value={values.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("phone", e.target.value)
                  }}
                  as={TextField}
                  fullWidth={true}
                  label={"telefone"}
                />
              </Box>
              <Field
                as={TextField}
                className={classes.margin}
                value={values.msg}
                label={"Mensagem"}
                fullWidth={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("msg", e.target.value)
                }}
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
          )
        }}
      </Formik>
    </Grid>
  )
}
