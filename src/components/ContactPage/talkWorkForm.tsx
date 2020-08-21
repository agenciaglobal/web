import { Tab, Theme } from "@material-ui/core"
import NumberFormat from "react-number-format"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import TextField from "@material-ui/core/TextField"
import * as React from "react"
import * as Yup from "yup"
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

const WorkHere = (
  <div style={{ alignSelf: "flex-start" }}>
    <Typography
      style={{
        textAlign: "left",
        fontFamily: "GSThree",
        fontSize: 16,
        lineHeight: "1em",
        marginTop: 4,
      }}
    >
      Trabalhe aqui
    </Typography>
    <Typography
      style={{
        textAlign: "left",
        textTransform: "none",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      work@global.tt
    </Typography>
  </div>
)

const TalkToUs = (
  <div style={{ alignSelf: "flex-start" }}>
    <Typography
      style={{
        textAlign: "left",
        fontFamily: "GSThree",
        fontSize: 16,
        lineHeight: "1em",
        marginTop: 4,
      }}
    >
      Fale com a gente
    </Typography>
    <Typography
      style={{
        textAlign: "left",
        textTransform: "none",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      contact@global.tt
    </Typography>
  </div>
)

export const TalkWorkForm = (): React.ReactElement => {
  const classes = useStyles()
  const [current, setCurrent] = React.useState<number>(0)
  return (
    <Grid className={classes.grid} item={true} sm={12} md={8}>
      <Tabs value={current} variant={"fullWidth"}>
        {[TalkToUs, WorkHere].map((d, index) => (
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
      <div style={{ height: 2, background: yellow }} />
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          phone: Yup.string().required(),
          msg: Yup.string().required(),
        })}
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
            return
          }
          console.log("outside")
        }}
      >
        {({
          values,
          setFieldValue,
          isValid,
          dirty,
          initialTouched,
          handleSubmit,
          errors,
        }) => {
          console.log(errors, isValid, initialTouched)
          const s = values.phone
            .split(" ")
            .join("")
            .split(")")
            .join("")
            .split("(")
            .join("")
            .split("-")
            .join("")
            .split("_")
            .join("")
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
                      error={Boolean(errors.name)}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("name", e.target.value)
                      }}
                      as={TextField}
                      name={"name"}
                      label={"Nome"}
                    />
                    <Field
                      as={TextField}
                      name={"email"}
                      required={true}
                      error={Boolean(errors.email)}
                      className={classes.textField}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("email", e.target.value)
                      }}
                      value={values.email}
                      label={"Email"}
                    />
                    <NumberFormat
                      className={classes.textField}
                      format={
                        s.length < 11 ? "(##) ####-#####" : "(##) #####-####"
                      }
                      mask={s.length < 10 ? "_" : ""}
                      customInput={TextField}
                      max={11}
                      required={true}
                      placeholder={"Phone"}
                      label={"Phone"}
                      error={Boolean(errors.phone)}
                      fullWidth={true}
                      isNumericString={false}
                      value={values.phone}
                      name={"phone"}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("phone", e.target.value)
                      }}
                    />
                  </Box>
                  <Field
                    name={"msg"}
                    error={Boolean(errors.msg)}
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
                  disabled={
                    (current === 0 && !isValid) || (current === 0 && !dirty)
                  }
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
