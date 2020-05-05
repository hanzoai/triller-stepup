import {
  Container,
  Grid,
  Grow,
  Link,
  Typography,
  Slide,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import React, { useEffect, useState } from 'react'

import Countdown from '../components/Countdown'
import NewsletterSignUp from '../components/NewsletterSignUp'

import TrillerBG from '../assets/trillerbg2.png'
import TrillerBG2 from '../assets/trillerbg2.png'
import StartRecording from '../assets/startrecording.png'
import DownloadNow from '../assets/downloadnow.png'
import AppStore from '../assets/appstore.png'
import PlayStore from '../assets/playstore.png'
import MillionsOfSongs from '../assets/millionsofsong.png'
import StepUpLogo1 from '../assets/trillerheader.png'
// import StepUpLogo2 from '../assets/stepuplogo2.png'
import Prize from '../assets/prize.png'
import TrillerLogo from '../assets/logo-triller.png'
import BoostLogo from '../assets/logo-boost.png'

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
    backgroundImage: `url(${TrillerBG})`,
    backgroundSize: 'cover',

    [theme.breakpoints.up('md')]: {
      backgroundAttachment: 'fixed',
    }
  },
  stepUp: {
    paddingTop: '5vh',
    marginBottom: '-10vh',
    transform: 'translateX(3%)',
  },
  stepUpLogo: {
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    marginTop: '0',

    [theme.breakpoints.down('sm')]: {
      marginTop: '5vh',
    }
  },
  stepUpLogo1: {
    display: 'block',
    maxWidth: 800,
    width: '100%',
  },
  stepUpLogo2: {
    display: 'block',
    maxWidth: 800,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  contact: {
    paddingTop: '15vh',
    paddingBottom: '10vh',
    // backgroundImage: `url(${TrillerBG2})`,
    // backgroundSize: 'cover',
    // [theme.breakpoints.up('md')]: {
    //   backgroundAttachment: 'fixed',
    // }
  },
  prizeImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1200,
    width: '100%',
  },
  apps: {
    paddingTop: '5vh',
    paddingBottom: '10vh',
  },
  recordingImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 400,
    width: '100%',
  },
  downloadNowImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 900,
    width: '100%',
  },
  appStoreImg: {
    display: 'block',
    marginLeft: 'auto',
    maxWidth: 200,
    width: '100%',
  },
  playStoreImg: {
    display: 'block',
    marginRight: 'auto',
    maxWidth: 200,
    width: '100%',
  },
  millions: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    background: '#000',
  },
  millionsOfSongsImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  iframe: {
    border: 0,
    width: '100vw',
    height: '100vh',
  },
  newsletter: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 400,
  },
  trillerLogo: {
    display: 'block',
    marginLeft: 'auto',
    maxWidth: 200,
    width: '100%',
  },
  boostLogo: {
    display: 'block',
    marginRight: 'auto',
    maxWidth: 200,
    width: '100%',
  },
}))

export default () => {
  const classes = useStyles()

  const [logoFrame, setLogoFrame] = useState(true)
  const [logoShow, setLogoShow] = useState(false)
  const [slide1, setSlide1] = useState(false)
  const [slide2, setSlide2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setSlide1(true)
    }, 200)

    setTimeout(() => {
      setSlide2(true)
    }, 800)

    setTimeout(() => {
      setLogoShow(true)
    }, 1600)

    const logoInterval = setInterval(() => {
      setLogoFrame((frame) => !frame)
    }, 1000)

    return () => {
      clearInterval(logoInterval)
    }
  }, [])

  return (
    <div>
      <div className={classes.body}>
        <Container className={classes.stepUp} maxWidth='lg'>
          <div className={classes.stepUpLogo}>
            <img className={classes.stepUpLogo1} src={StepUpLogo1} alt='StepUp To The Mic!'/>
          </div>

          {
            // <Slide direction='right' in={slide1} timeout={500}>
            //   <Typography variant='h4' style={{ fontWeight: 700 }}>
            //     CALLING ALL ASPIRING ARTISTS!
            //   </Typography>
            // </Slide>
            // <Slide direction='right' in={slide2} timeout={500}>
            //   <Typography variant='h5' style={{ fontWeight: 300 }}>
            //     Time for you to put it all on the line and...
            //   </Typography>
            // </Slide>
            // <Grow in={logoShow} timeout={1000}>
            //   <div>
            //     <div className={classes.stepUpLogo}>
            //       <img className={classes.stepUpLogo1} src={StepUpLogo1} alt='StepUp To The Mic!' style={{ opacity: logoFrame ? 1 : 0}}/>
            //       <img className={classes.stepUpLogo2} src={StepUpLogo2} alt='StepUp To The Mic!' style={{ opacity: logoFrame ? 0 : 1}}/>
            //     </div>
            //   </div>
            // </Grow>
          }
        </Container>
        <div className={classes.contact}>
          <Container maxWidth='lg'>
            <img className={classes.prizeImg} src={Prize} alt='Win A Recording Contract'/>
              <br />
              <Typography variant='h3' align='center'>
                Contest Launches
              </Typography>
            <Countdown/>
            <Grid container alignItems='center' spacing={4}>
              <Grid item xs={12}>
                <Typography variant='h4' align='center'>
                  Sign up now for alerts
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <NewsletterSignUp className={classes.newsletter}/>
              </Grid>
              <Grid item xs={6}>
                <img className={classes.trillerLogo} src={TrillerLogo} alt='Sponsored By Triller'/>
              </Grid>
              <Grid item xs={6}>
                <img className={classes.boostLogo} src={BoostLogo} alt='Sponsored By Boost Mobile'/>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.apps} maxWidth='lg'>
          <Grid container alignItems='center' spacing={4}>
            <Grid item xs={12}>
              <img className={classes.recordingImg} src={StartRecording} alt='Start Recording Your Practice Submissions'/>
            </Grid>
            <Grid item xs={12}>
              <img className={classes.downloadNowImg} src={DownloadNow} alt='Download Triller App Now'/>
            </Grid>
            <Grid item xs={6}>
              <Link href='https://itunes.apple.com/us/app/triller-social-video-platform/id994905763' rel='nofollow' target='_blank'>
                <img className={classes.appStoreImg} src={AppStore} alt='Download on the AppStore'/>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link href='https://play.google.com/store/apps/details?id=co.triller.droid&hl=en_US' rel='nofollow' target='_blank'>
                <img className={classes.playStoreImg} src={PlayStore} alt='Get It On Google Play'/>
              </Link>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.millions}>
          <Container maxWidth='lg'>
            <img className={classes.millionsOfSongsImg} src={MillionsOfSongs} alt='MillionsOfSongs'/>
          </Container>
        </div>
      </div>
      { /* <iframe src='https://triller.co' className={classes.iframe}/> */ }
    </div>
  )
}
