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
            A Global é o reflexo de um mundo em constante transformação.
          </Typography>
        </Box>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            O comportamento mutante e volátil da sociedade nos provoca a reinventar nossa entrega a cada novo briefing.
          </Typography>
        </Box>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            Nós acreditamos nas pessoas e tiramos partido da complexidade de suas mentes. Combinações únicas de habilidades, conhecimentos e experiências. Chamamos de Crowdtalent a soma desses talentos em torno de uma ideia.
          </Typography>
        </Box>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            Integramos estratégia, comunicação, dados e design em projetos que ajudam nossos clientes a serem protagonistas da mudança. Acreditamos no resultado da equação entre dados e criatividade para propor novos caminhos, onde a propaganda e o entretenimento estão mais próximos do que nunca e onde tudo deve ser mensurado.
          </Typography>
        </Box>
        <Box lineHeight={3}>
          <Typography className={classes.div}>
            Acreditamos, sobretudo, que, em meio a tanta mudança, ser criativo é a melhor estratégia.
          </Typography>
        </Box>
        <Box lineHeight={1.5}>
          <Typography className={classes.div2}>
            A mudança requer criatividade.
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}
