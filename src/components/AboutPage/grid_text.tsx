import { Typography, Theme } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"

const useGridStyles = makeStyles((theme: Theme) => ({
  div: {
    textAlign: "justify",
    fontFamily: "GSTwo",
    fontSize: "14px",
    lineHeight: "28px",
    paddingBottom: 28,
    "@media (min-width:600px)": {
      fontSize: "16px",
      lineHeight: "36px",
      paddingBottom: 36,
    },
  },
  div2: {
    fontFamily: "GSThree",
    fontSize: "20px",
    lineHeight: "25px",
    "@media (min-width:600px)": {
      fontSize: "24px",
    },
  },
  grid: {
    padding: 0,
  },
  box: {
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingTop: 0,
      paddingBottom: 24,
    },
  },
}))

export const AboutTextGrid = (): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <Grid className={classes.grid} item xs={12} sm={7}>
      <Box className={classes.box}>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            Em um contexto one a única certeza é a mudança e sua velocidade,
            somos o parceiro para ajudar os negócios a navegá-la com clareza
            estratégica e criatividade.
          </Typography>
        </Box>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            O parceiro para conectar as pontas. Para dizer o que tem que ser
            dito, mas de um jeito diferente. Para fazer conteúdo que construa
            uma audiência engajada. Para reunir comunicação, tecnologia, dados e
            design em prol da construção de marcas contemporâneas.
          </Typography>
        </Box>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            Chamamos de crowdtalent a junção dos melhores talentos com
            diferentes skills e conhecimentos em torno de uma ideia. Um processo
            integrado de trabalho que nos permite avançar juntos dos nossos
            clientes na transformação de suas marcas.
          </Typography>
        </Box>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            Acreditamos que só quem consegue navegar à mudança são aqueles que
            criativamente procuram novos caminhos.
          </Typography>
        </Box>
        <Box lineHeight={1.5}>
          <Typography className={classes.div2}>
            Change requires Creativity.
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}
