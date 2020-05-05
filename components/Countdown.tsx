import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

import React from 'react'
import moment from 'moment'

import FlipCountDown from './FlipCountdown'

const COUNTDOWN_TARGET = moment('2020-05-08 23:59:59-07:00')
const TOTAL_SECONDS = COUNTDOWN_TARGET.diff(moment()) / 1000

const useStyles = makeStyles((theme) => ({
  countdown: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
}))

export default () => {
  const classes = useStyles()
  const theme = useTheme()

  const isBelowMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className={classes.countdown}>
      <FlipCountDown
        option={{
          leftSecond: TOTAL_SECONDS,
          format: 'dd:hh:mm:ss',
          style: {
            color: theme.palette.primary.main,
            background: 'white'
          },
          standard: isBelowMD ? '12vw': '100px',
        }}
      />
    </div>
  )
}
