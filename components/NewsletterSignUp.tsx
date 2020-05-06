import {
  isEmail,
  isRequired,
} from '@hanzo/middleware'

import {
  MUIText,
} from '@hanzo/react'

import {
  Button,
  Grid,
  Typography,
} from '@material-ui/core'

import {
  makeStyles,
} from '@material-ui/core/styles'

import React, {
  useState,
} from 'react'

import {
  HANZO_ENDPOINT,
  HANZO_KEY,
  NEWSLETTER_FORM_ID,
  useMidstream,
} from '../src'

import Api from '../src/hanzo'

const useStyles = makeStyles((theme) => ({
  formButton: {
    paddingTop: 7,
    paddingBottom: 7,
    fontWeight: 800,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    float: 'right',
  },
}))

export default ({ ...props }) => {
  const classes = useStyles()

  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    setEmail,
    setName,
    run,
    err,
  } = useMidstream({
    email: [isRequired, isEmail],
    name: [isRequired],
  }, {
    dst: (k, v) => {
      if (k === 'email') {
        setFormEmail(v)
      } else if (k === 'name') {
        setFormName(v)
      }
    },
  })

  const submit = async () => {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    try {
      const ret = await run()

      if (ret instanceof Error) {
        throw ret
      }

      const [firstName, lastName] = formName.trim().split(/\s+/)

      const api = new Api(HANZO_KEY, HANZO_ENDPOINT)

      try {
        const res = await api.client.form.subscribe({
          formId: NEWSLETTER_FORM_ID,
          email: formEmail,
          metadata: {
            firstName,
            lastName,
            host: window.location.hostname,
            path: window.location.pathname,
          },
        })
        console.log('res', res)
      } finally {
        setSubmitted(true)
      }
    } catch (e) {
      console.log('error', e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Grid container spacing={2} {...props}>
      { !submitted
        ? <>
          <Grid item xs={12}>
            <MUIText
              fullWidth
              label='Name'
              placeholder='Jean Doe'
              value={formName}
              setValue={setName}
              error={err.name}
              variant='outlined'
              size='small'
            />
          </Grid>
          <Grid item xs={12}>
            <MUIText
              fullWidth
              label='Email'
              placeholder='name@email.com'
              value={formEmail}
              setValue={setEmail}
              error={err.email}
              variant='outlined'
              size='small'
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color='primary'
              variant='contained'
              size='large'
              className={classes.formButton}
              fullWidth
              onClick={submit}
            >
              Get Alerts
            </Button>
          </Grid>
        </>
        : <Grid item xs={12}>
          <Typography variant='h6' paragraph align='center' color='textPrimary'>
            You are now signed up for alerts.
          </Typography>
        </Grid>
      }
    </Grid>
  )
}
