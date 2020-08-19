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
import Typography from "@material-ui/core/Typography"

const yellow = "#FFCC00"

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    flexGrow: 1,
    margin: "16px 8px",
    "& label": {
      fontFamily: "Montserrat, sans-serif",
    },
    "& label.Mui-focused": {
      color: theme.palette.primary.contrastText,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.contrastText,
    },
  },
  button: {
    borderRadius: 0,
    boxShadow: "none",
    height: 44,
    padding: "0px 32px",
    fontFamily: "GSThree",
    fontSize: 18,
    color: "#000",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      boxShadow: `0px 0px 0px 1px ${theme.palette.primary.contrastText} inset`,
      backgroundColor: theme.palette.secondary.main,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.contrastText,
      color: yellow,
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  box: {
    marginTop: 24,
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  bcontainer: {
    paddingTop: 24,
    display: "flex",
    // justifyContent: "flex-end",
  },
  grid: {
    marginTop: 80,
    padding: 0,
    width: "100%",
  },
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
      <Tabs value={current} variant={"fullWidth"}>
        {["Fale com a gente", "Trabalhe aqui"].map((d, index) => (
          <Tab
            style={{
              background: current === index ? yellow : "#E9E9E9",
              fontFamily: "GSThree",
            }}
            onClick={() => setCurrent(index)}
            key={index}
            label={d}
          />
        ))}
      </Tabs>
      <div style={{ height: 2, background: yellow }}></div>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          if (current === 1) {
            window.open(
              `mailto:${"work@global.tt"}?subject=${"work with global"}`,
              "_blank",
            )
            return
          }
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
              {current === 1 && (
                <Box style={{ padding: "24px 16px 0px" }}>
                  <Typography
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      textAlign: "justify",
                    }}
                  >
                    Estamos sempre prontos para conhecer novos rostos e ideias.
                    Caso tenha interesse em trabalhar com a gente, mande o seu
                    currículo, em formato pdf, e portfólio, se tiver, para o
                    nosso e-mail. Se quiser, pode aproveitar o espaço para nos
                    contar um pouquinho sobre você. Assim que recebermos,
                    avaliaremos as possibilidades e retornaremos em seguida.
                  </Typography>
                </Box>
              )}
              {current === 0 && (
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Box className={classes.box}>
                    <Field
                      className={classes.textField}
                      required={true}
                      value={values.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("name", e.target.value)
                      }}
                      as={TextField}
                      label={"Nome"}
                    />
                    <Field
                      as={TextField}
                      required={true}
                      className={classes.textField}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("email", e.target.value)
                      }}
                      value={values.email}
                      label={"Email"}
                    />
                    <Field
                      className={classes.textField}
                      required={true}
                      value={values.phone}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("phone", e.target.value)
                      }}
                      as={TextField}
                      label={"Telefone"}
                    />
                  </Box>
                  <Field
                    className={classes.textField}
                    required={true}
                    as={TextField}
                    value={values.msg}
                    label={"Mensagem"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setFieldValue("msg", e.target.value)
                    }}
                    rows={5}
                    multiline={true}
                  />
                </Box>
              )}
              <Box className={classes.bcontainer}>
                <Button
                  className={classes.button}
                  type={"submit"}
                  variant={"contained"}
                >
                  {current === 1 ? "FALE COM A GENTE" : "ENVIAR"}
                </Button>
              </Box>
            </form>
          )
        }}
      </Formik>
    </Grid>
  )
}
