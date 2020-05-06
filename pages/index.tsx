import {
  Container,
  Fade,
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

import TrillerBG from '../assets/trillerbg4.png'
import TrillerBG2 from '../assets/trillerbg2.png'
import StartRecording from '../assets/startrecording.png'
import DownloadNow from '../assets/downloadnow.png'
import AppStore from '../assets/appstore.png'
import PlayStore from '../assets/playstore.png'
import StepUpLogo1 from '../assets/trillerheader2.png'
// import StepUpLogo2 from '../assets/stepuplogo2.png'
import Prize from '../assets/prize.png'
import TrillerLogo from '../assets/logo-triller.png'
import BoostLogo from '../assets/logo-boost.png'
import GrandPrizes from '../assets/grandprizes.png'
import Record from '../assets/record.png'
import Judges from '../assets/judges.png'

import JudgeStarrah from '../assets/judges/starrah.png'
import JudgeMurda from '../assets/judges/murda.png'
import JudgeQuavo from '../assets/judges/quavo.png'
import JudgeTakeoff from '../assets/judges/takeoff.png'

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
    backgroundImage: `url(${TrillerBG})`,
    backgroundSize: 'contain',

    [theme.breakpoints.up('md')]: {
      backgroundAttachment: 'fixed',
    }
  },
  stepUp: {
    paddingTop: '15vh',
    marginBottom: '-10vh',
    transform: 'translateX(3%)',
  },
  stepUpLogo: {
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    marginTop: '-20vh',

    [theme.breakpoints.down('sm')]: {
      marginTop: '-10vh',
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
  auditions: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
  },
  grandprizes: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
  grandprizesImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 700,
    width: '100%',
  },
  recordImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 80,
    width: '100%',
  },
  recordPoints: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  judges: {
    paddingTop: '5vh',
    paddingBottom: '15vh',
  },
  judgesImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1000,
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  judgeImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
}))

export default () => {
  const classes = useStyles()

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
    }, 1400)
  }, [])

  return (
    <div>
      <div className={classes.body}>
        <Container className={classes.stepUp} maxWidth='lg'>
          <Fade in={slide1} timeout={800}>
            <div>
              <Slide direction='right' in={slide1} timeout={500}>
                <Typography variant='h4' style={{ fontWeight: 700 }}>
                  CALLING ALL ASPIRING ARTISTS!
                </Typography>
              </Slide>
            </div>
          </Fade>
          <Fade in={slide2} timeout={800}>
            <div>
              <Slide direction='right' in={slide2} timeout={500}>
                <Typography variant='h5' style={{ fontWeight: 300 }}>
                  Time for you to put it all on the line and...
                </Typography>
              </Slide>
            </div>
          </Fade>
          <Grow in={logoShow} timeout={1000}>
            <div className={classes.stepUpLogo}>
              <img className={classes.stepUpLogo1} src={StepUpLogo1} alt='StepUp To The Mic!'/>
            </div>
          </Grow>
        </Container>
        <div className={classes.contact}>
          <Container maxWidth='lg'>
            <img className={classes.prizeImg} src={Prize} alt='Win A Recording Contract'/>
              <br />
              <Typography variant='h3' align='center' className={classes.auditions}>
                AUDTIONS OPEN 5/8
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
        <Container className={classes.grandprizes} maxWidth='lg'>
          <Grid container alignItems='center' spacing={8}>
            <Grid item xs={12}>
              <img className={classes.grandprizesImg} src={GrandPrizes} alt='Grand Prizes'/>
            </Grid>
          </Grid>
          <Container className={classes.recordPoints} maxWidth='sm'>
            <Grid container alignItems='center' spacing={4}>
              <Grid item sm={2} xs={3}>
                <img className={classes.recordImg} src={Record} alt='Record'/>
              </Grid>
              <Grid item sm={10} xs={9}>
                <Typography variant='h4' align='left'>
                  Up to a one-year record label & management deal
                </Typography>
              </Grid>
              <Grid item sm={2} xs={3}>
                <img className={classes.recordImg} src={Record} alt='Record'/>
              </Grid>
              <Grid item sm={10} xs={9}>
                <Typography variant='h4' align='left'>
                  Record an original hit song written by Starrah & produced by Murda Beatz
                </Typography>
              </Grid>
              <Grid item sm={2} xs={3}>
                <img className={classes.recordImg} src={Record} alt='Record'/>
              </Grid>
              <Grid item sm={10} xs={9}>
                <Typography variant='h4' align='left'>
                  Shoot a professional music video
                </Typography>
              </Grid>
              <Grid item sm={2} xs={3}>
                <img className={classes.recordImg} src={Record} alt='Record'/>
              </Grid>
              <Grid item sm={10} xs={9}>
                <Typography variant='h4' align='left'>
                  Opportunity to place in U.S. Top 100 charts
                </Typography>
              </Grid>
              <Grid item sm={2} xs={3}>
                <img className={classes.recordImg} src={Record} alt='Record'/>
              </Grid>
              <Grid item sm={10} xs={9}>
                <Typography variant='h4' align='left'>
                  A free Boost Mobile smartphone & free year of service
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' align='left'>
                  * Legal Disclaimer: NO PURCHASE NECESSARY. Open to legal
                  residents of the 50 legal states & D.C. contestant must be
                  18 years or older at time or older at time of entry.
                  Void where prohibited. Sponsors Boost Mobile & Triller.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
        <Container className={classes.judges} maxWidth='lg'>
          <Grid container alignItems='flex-start' spacing={4}>
            <Grid item md={12}>
              <img className={classes.judgesImg} src={Judges} alt='Meet Your Hosts And Judges'/>
            </Grid>
            <Grid item xs={6} md={3}>
              <img className={classes.judgeImg} src={JudgeStarrah} alt='STARRAH'/>
              <br />
              <Typography variant='h4' align='center'>
                <strong>STARRAH</strong>
              </Typography>
              <Typography variant='h6' align='center'>
                She has written 14 singles thus far that have reached the Top 20 on Billboard Hot 100.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <img className={classes.judgeImg} src={JudgeMurda} alt='MURDA BEATZ'/>
              <br />
              <Typography variant='h4' align='center'>
                <strong>MURDA BEATZ</strong>
              </Typography>
              <Typography variant='h6' align='center'>
                Canadian record producer, DJ, and songwriter.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <img className={classes.judgeImg} src={JudgeQuavo} alt='QUAVO'/>
              <br />
              <Typography variant='h4' align='center'>
                <strong>QUAVO</strong>
              </Typography>
              <Typography variant='h6' align='center'>
                Quavo has been featured on four singles within the top 10 of the Billboard Hot 100.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <img className={classes.judgeImg} src={JudgeTakeoff} alt='TAKEOFF'/>
              <br />
              <Typography variant='h4' align='center'>
                <strong>TAKEOFF</strong>
              </Typography>
              <Typography variant='h6' align='center'>
                Two albums debuting at #1 on the Billboard Hot 100.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
