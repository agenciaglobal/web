import {
  Typography,
  Hidden,
  makeStyles,
  Theme,
} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import salaGlobal from "static/sala_global.png"

const useStyles = makeStyles((theme: Theme) => ({
  style: {
    display: "flex",
    justifyContent: "left",
    "@media (min-width:950px)": {
      justifyContent: "center",
      transform: "translate( 0px , -75% )",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  SvgIcon: {
    paddingRight: 8,
    fill: theme.palette.primary.contrastText,
  },
  font: {
    padding: "3px 0px",
  },
}))

export const AddressComponent = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <Grid
      item={true}
      sm={12}
      md={4}
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "baseline",
        padding: 0,
        marginBottom: -90,
      }}
    >
      <Hidden smDown>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              zIndex: 10,
              transform: "translate( 0px , -50% )",
            }}
            src={salaGlobal}
            alt="global"
          />
        </Box>
      </Hidden>
      <Box className={classes.style}>
        <Box style={{ paddingTop: 32, paddingBottom: 32 }}>
          <Typography className={classes.font}>
            Rua Câncio Gomes, 609
          </Typography>
          <Typography className={classes.font}>Fábrica do Futuro</Typography>
          <Typography className={classes.font}>
            Porto Alegre, RS, Brasil
          </Typography>
          <Box className={classes.flex}>
            <svg width="16" height="16" className={classes.SvgIcon}>
              <path d="M5.85507 0C2.6087 0 0 2.6087 0 5.85507C0 9.10145 3.30435 11.5942 5.85507 16C8.57971 11.1884 11.7101 9.10145 11.7101 5.85507C11.7101 2.6087 9.10145 0 5.85507 0ZM5.88406 9.15942C4.02899 9.15942 2.52174 7.71014 2.52174 5.85507C2.52174 4 4.02899 2.49275 5.88406 2.49275C7.73913 2.49275 9.18841 4 9.18841 5.85507C9.18841 7.71014 7.73913 9.15942 5.88406 9.15942Z" />
            </svg>
            <Typography className={classes.font}>902220-060</Typography>
          </Box>
          <Box className={classes.flex}>
            <svg width="16" height="16" className={classes.SvgIcon}>
              <path d="M15.9396 11.0368C15.8414 10.8706 15.577 10.7724 15.1841 10.576C14.7913 10.3796 12.8574 9.42776 12.4948 9.29178C12.1322 9.16336 11.8678 9.09537 11.611 9.4882C11.3466 9.88102 10.5911 10.7724 10.3645 11.0293C10.1379 11.2937 9.90368 11.3239 9.51086 11.1275C9.11804 10.9311 7.84891 10.5156 6.34561 9.17092C5.17469 8.12842 4.38905 6.83664 4.15486 6.44382C3.92823 6.05099 4.1322 5.83947 4.32861 5.64306C4.50236 5.46931 4.72144 5.18225 4.91785 4.95562C5.11426 4.72899 5.18225 4.5628 5.31067 4.29839C5.43909 4.03399 5.37866 3.80737 5.28045 3.61095C5.18225 3.41454 4.3966 1.47309 4.06421 0.687441C3.74693 -0.075543 3.4221 0.0226629 3.18036 0.0151086C2.95373 0 2.68933 0 2.42493 0C2.16808 0 1.73749 0.0982059 1.37488 0.491029C1.01983 0.883853 0 1.83569 0 3.77715C0 5.7186 1.41265 7.58451 1.60907 7.84891C1.80548 8.11331 4.38149 12.0869 8.33239 13.7941C9.26912 14.2021 10.0019 14.4438 10.576 14.6251C11.5203 14.9273 12.3739 14.882 13.0538 14.7838C13.8093 14.6704 15.3805 13.8319 15.7129 12.9103C16.0378 11.9887 16.0378 11.1955 15.9396 11.0368Z" />
            </svg>
            <Typography className={classes.font}>+55 51 3378.2100</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}
