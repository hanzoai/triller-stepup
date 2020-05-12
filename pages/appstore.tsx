import Head from 'next/head'

import {
  Typography,
  Link,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  fade: {
    width: '100vw',
    padding: theme.spacing(2),
    display: 'block',
    animation: '$fade 0.5s 1',
    animationDelay: '2s',
    animationFillMode: 'forwards',
    opacity: 0,
  },
  '@keyframes fade': {
    '0%': {opacity :0},
    '100%': {opacity :1},
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <meta http-equiv='refresh' content="0;https://itunes.apple.com/us/app/triller-social-video-platform/id994905763" />
      </Head>
      <Typography variant='body1' className={classes.fade} align='center'>
        You are leaving Triller.co, you will be redirected to
        <Link href="https://itunes.apple.com/us/app/triller-social-video-platform/id994905763">&nbsp;your destination&nbsp;</Link>
        in 5 seconds, otherwise, select the link manually.
      </Typography>
    </div>
  )
}
