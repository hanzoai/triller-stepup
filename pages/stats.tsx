import classnames from 'classnames'
import React, {useEffect, useState} from 'react'
import Router from 'next/router'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'

import localstory from 'localstory'

import { makeStyles } from '@material-ui/core/styles'

import { VOTING_ENDPOINT } from '../src'
import voting from '../src/config/voting'

const refs = {}

for (const contestant of voting) {
  refs[contestant.handle] = contestant.youtube
}

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  admin: {
    minHeight: '100vh',
  },
  container: {
    position: 'relative',
    top: '50vh',
    transform: 'translateY(-50%)',
  },
  card: {
    margin: 20,

    '& > button': {
      padding: '0 !important',
    },
  }
}))

export default () => {
  const classes = useStyles()

  const [errorMessage, setErrorMessage] = useState('')
  const [stats, setStats] = useState()
  const [password, setPassword] = useState('')

  const getStats = async (password): Promise<any> => {
    let res = await fetch(`${VOTING_ENDPOINT}/stats?password=${password}`)
    return await res.json()
  }

  const submit = async (e, p?) => {
    setErrorMessage('')

    try {
      const data = await getStats(p ?? password)
      if (data.error) {
        throw new Error(data.error)
      }

      if (typeof window !== 'undefined') {
        let t = localstory(window.localStorage ?? window.sessionStorage, 'triller-admin')
        t.set('password', p ?? password)
      }

      setStats(data)
    } catch (err) {
      console.log('getStats error', err)
      setErrorMessage(err.toString())
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && !stats) {
      let t = localstory(window.localStorage ?? window.sessionStorage, 'triller-admin')
      const pw = t.get('password')

      submit(undefined, pw)
    }
  }, [])

  let data = {
    labels: [],
    datasets: []
  }

  let sorted: any[] = []
  if (stats) {
    for (let k in stats as unknown as any[]) {
      let stat: any = (stats as unknown as any[])[k]

      sorted.push({
        name: k,
        src: refs[k],
        views: stat.views,
        score: stat.score,
      })
    }
  }

  sorted.sort((a,b) => {
    return b.score - a.score
  })

  return (
    <main className={classes.admin} id='stats'>
      {
        !stats
          ? (
            <Container  className={classes.container} maxWidth='sm'>
              <Paper className={classnames(classes.root, 'login')}>
                <TextField
                  fullWidth
                  label='Password'
                  type='password'
                  value={password}
                  variant='outlined'
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <br/>
                <br/>
                {
                  errorMessage && <div className='error'>{errorMessage}</div>
                }
                <Button
                  onClick={submit}
                  color='primary'
                  variant='contained'
                >
                  Show Stats
                </Button>
              </Paper>
            </Container>
          ) : (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{padding: 40}}>
                  <Typography variant='h4' color='textPrimary'>
                    Vote & View Totals
                  </Typography>
                </Grid>
                {
                  sorted.map((stat, count) => (
                    <Grid item xs={12} sm={6} md={count===0 ? 6 : 3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <Link href={`https://www.youtube.com/watch?v=${refs[stat.name]}`} target='_blank'>
                            <CardMedia
                              component='img'
                              image={`https://img.youtube.com/vi/${refs[stat.name]}/hqdefault.jpg`}
                              title={stat.name.split('_')[0]}
                            />
                          </Link>
                        </CardActionArea>
                        <CardContent>
                          <Typography variant='h5'>
                            {stat.name.split('_')[0]+' #'+(count+1)}
                          </Typography>
                          <Typography variant='h6'>
                            Votes:&nbsp;
                            <span>{stat.score}</span>
                          </Typography>
                          <Typography variant='h6'>
                            Views:&nbsp;
                            <span>{stat.views}</span>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            </>
          )
        }
    </main>
  )
}
