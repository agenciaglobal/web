import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import * as React from "react"

const useGridStyles = makeStyles(() => ({
  div: {
    fontFamily: "GSTwo",
    fontSize: "16px",
    lineHeight: "25px",
    paddingBottom: 20,
  },
  div2: {
    fontFamily: "GSThree",
    fontSize: "20px",
    lineHeight: "25px",
    "@media (min-width:600px)": {
      fontSize: "24px",
    },
  },
}))

export const AboutTextGrid = (): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <Grid item xs={12} sm={8}>
      <Box lineHeight={3}>
        <Typography className={classes.div}>
          Em um contexto onde a única certeza é a mudança e sua velocidade,
          somos o parceiro para ajudar os negócios a navegá-la com clareza
          estratégica e criatividade.
        </Typography>
      </Box>
      <Box lineHeight={3}>
        <Typography className={classes.div}>
          O parceiro para conectar as pontas. Para dizer o que tem que ser dito,
          mas de um jeito diferente. Para fazer conteúdo que construa uma
          audiência engajada. Para reunir comunicação, tecnologia, dados e
          design em prol da construção de marcas contemporâneas.
        </Typography>
      </Box>
      <Box lineHeight={3}>
        <Typography className={classes.div}>
          Chamamos de crowdtalent a junção dos melhores talentos com diferentes
          skills e conhecimentos em torno de uma ideia. Um processo integrado de
          trabalho que nos permite avançar juntos dos nossos clientes na
          transformação de suas marcas.
        </Typography>
      </Box>
      <Box lineHeight={3}>
        <Typography className={classes.div}>
          Acreditamos que só quem consegue navegar à mudança são aqueles que
          criativamente procuram novos caminhos.
        </Box>
      </Typography>
      <Typography className={classes.div2}>
        <Box lineHeight={1.5}>Change requires Creativity.</Box>
      </Typography>

    </Grid>
  )
}
