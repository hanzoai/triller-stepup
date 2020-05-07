import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  useMediaQuery
} from '@material-ui/core'

import React from 'react'
import moment from 'moment'

import FlipCountDown from './FlipCountdown'

const useStyles = makeStyles((theme) => ({
  countdown: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'table',
    textAlign: 'center',
  },
}))

export default ({target}) => {
  const classes = useStyles()
  const theme = useTheme()

  const COUNTDOWN_TARGET = moment(target)
  const TOTAL_SECONDS = COUNTDOWN_TARGET.diff(moment()) / 1000

  const isBelowMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className={classes.countdown}>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant='body1'>
            DAYS
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='body1'>
            HOURS
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='body1'>
            MINUTES
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='body1'>
            SECONDS
          </Typography>
        </Grid>
      </Grid>
      <FlipCountDown
        option={{
          leftSecond: TOTAL_SECONDS,
          format: 'dd:hh:mm:ss',
          style: {
            color: theme.palette.primary.main,
            background: 'white'
          },
          standard: isBelowMD ? '12vw': '60px',
        }}
      />
    </div>
  )
}
