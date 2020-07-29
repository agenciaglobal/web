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
    fontWeight: 500,
  },
}))

export const AboutTextGrid = (): React.ReactElement => {
  const classes = useGridStyles()
  return (
    <Grid item xs={12} sm={8}>
      <Typography className={classes.div}>
        <Box lineHeight={3}>
          Em um contexto onde a única certeza é a mudança e sua velocidade,
          somos o parceiro para ajudar os negócios a navegá-la com clareza
          estratégica e criatividade.
        </Box>
      </Typography>
      <Typography className={classes.div}>
        <Box lineHeight={3}>
          O parceiro para conectar as pontas. Para dizer o que tem que ser dito,
          mas de um jeito diferente. Para fazer conteúdo que construa uma
          audiência engajada. Para reunir comunicação, tecnologia, dados e
          design em prol da construção de marcas contemporâneas.
        </Box>
      </Typography>
      <Typography className={classes.div}>
        <Box lineHeight={3}>
          Chamamos de crowdtalent a junção dos melhores talentos com diferentes
          skills e conhecimentos em torno de uma ideia. Um processo integrado de
          trabalho que nos permite avançar juntos dos nossos clientes na
          transformação de suas marcas.
        </Box>
      </Typography>
      <Typography className={classes.div}>
        <Box lineHeight={3}>
          Acreditamos que só quem consegue navegar à mudança são aqueles que
          criativamente procuram novos caminhos.
        </Box>
      </Typography>
      <Typography className={classes.div}>
        <Box lineHeight={3}>Change requires Creativity.</Box>
      </Typography>
    </Grid>
  )
}
