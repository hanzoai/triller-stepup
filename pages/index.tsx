import {
  Container,
  Fade,
  Grid,
  Grow,
  IconButton,
  Link,
  Typography,
  Slide,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import React, { useEffect, useState } from 'react'
import HTMLComment from 'react-html-comment'

import Countdown from '../components/Countdown'
import NewsletterSignUp from '../components/NewsletterSignUp'

import TrillerBG from '../assets/trillerbg4.jpg'
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

import JudgeStarrah from '../assets/judges/starrah.jpg'
import JudgeMurda from '../assets/judges/murda.jpg'
import JudgeQuavo from '../assets/judges/quavo.jpg'
import JudgeTakeoff from '../assets/judges/takeoff.jpg'

import Facebook from '../assets/social/facebook.png'
import Twitter from '../assets/social/twitter.svg'
import Instagram from '../assets/social/instagram.svg'
import Youtube from '../assets/social/youtube.png'
import Apple from '../assets/social/apple.png'
import Google from '../assets/social/google.png'

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
    paddingTop: '0vh',
    marginBottom: '5vh',
  },
  stepUpLogo: {
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    marginTop: '-15vh',
    marginBottom: -100,

    [theme.breakpoints.down('sm')]: {
      marginTop: '-5vh',
      marginBottom: -30,
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
    paddingTop: '5vh',
    paddingBottom: '15vh',
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
    paddingTop: '0vh',
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
    maxWidth: 400,
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
  footer: {
    paddingBottom: '10vh',
  },
  footerLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 100,
    marginTop: 30,
    marginBottom: 30,
  },
  footerIcon: {
    height: 30,
  },
  wideFooterIcon: {
    width: 30,
  },
  footerButton: {
    border: '1px solid #fff',
    margin: 4,
  },
  socialButtons: {
    textAlign: 'left',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    }
  },
  downloadButtons: {
    textAlign: 'right',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    }
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
          <div className={classes.stepUpLogo}>
            <img className={classes.stepUpLogo1} src={StepUpLogo1} alt='StepUp To The Mic!'/>
          </div>
          <img className={classes.prizeImg} src={Prize} alt='Win A Recording Contract'/>
          {
            // <Fade in={slide1} timeout={800}>
            //   <div>
            //     <Slide direction='right' in={slide1} timeout={500}>
            //       <Typography variant='h4' style={{ fontWeight: 700 }}>
            //         CALLING ALL ASPIRING ARTISTS!
            //       </Typography>
            //     </Slide>
            //   </div>
            // </Fade>
            // <Fade in={slide2} timeout={800}>
            //   <div>
            //     <Slide direction='right' in={slide2} timeout={500}>
            //       <Typography variant='h5' style={{ fontWeight: 300 }}>
            //         Time for you to put it all on the line and...
            //       </Typography>
            //     </Slide>
            //   </div>
            // </Fade>
          }
        </Container>
        <Container className={classes.apps} maxWidth='lg'>
          <Typography variant='h3' align='center' className={classes.auditions}>
            AUDITIONS OPEN 5/8
          </Typography>
          <Countdown/>
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
        <Container className={classes.judges} maxWidth='lg'>
          <Grid container alignItems='flex-start' spacing={4}>
            <Grid item md={12}>
              <img className={classes.judgesImg} src={Judges} alt='Meet Your Hosts And Judges'/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link href='https://www.instagram.com/whereisstarrah/?hl=en' target='_blank'>
                <img className={classes.judgeImg} src={JudgeStarrah} alt='STARRAH'/>
              </Link>
              <br />
              <Typography variant='h4' align='center'>
                <strong>STARRAH</strong>
              </Typography>
              <Link href='https://www.instagram.com/whereisstarrah/?hl=en' target='_blank'>
                <Typography variant='h6' align='center'>
                  <strong>@whereisstarrah</strong>
                </Typography>
              </Link>
              <br />
              <Typography variant='h6' align='center'>
                Starrah has written 14 singles that have reached the Top 20 on the
                Billboard Hot 100;  two of which went No. 1 (“Havana” by Camila
                Cabello and “Girls Like You” by Maroon 5) and five peaking in the top 10.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link href='https://www.instagram.com/murdabeatz/?hl=en' target='_blank'>
                <img className={classes.judgeImg} src={JudgeMurda} alt='MURDA BEATZ'/>
              </Link>
              <br />
              <Typography variant='h4' align='center'>
                <strong>MURDA BEATZ</strong>
              </Typography>
              <Link href='https://www.instagram.com/murdabeatz/?hl=en' target='_blank'>
                <Typography variant='h6' align='center'>
                  <strong>@murdabeatz</strong>
                </Typography>
              </Link>
              <br />
              <Typography variant='h6' align='center'>
                Murda Beatz has produced numerous hit singles for top rappers including Travis Scott, Gucci Mane, Drake, Migos, and 6ix9ine, alongside frequent collaborators Cubeatz.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link href='https://www.instagram.com/quavohuncho/?hl=en' target='_blank'>
                <img className={classes.judgeImg} src={JudgeQuavo} alt='QUAVO'/>
              </Link>
              <br />
              <Typography variant='h4' align='center'>
                <strong>QUAVO</strong>
              </Typography>
              <Link href='https://www.instagram.com/quavohuncho/?hl=en' target='_blank'>
                <Typography variant='h6' align='center'>
                  <strong>@quavohuncho</strong>
                </Typography>
              </Link>
              <br/>
              <Typography variant='h6' align='center'>
                Quavo is a rapper, singer, songwriter, and record producer, best known as a member of Migos and has numerous hits that have made the top 10 of the Billboard Hot 100 with Migos and other collaborations.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link href='https://www.instagram.com/yrntakeoff/?hl=en' target='_blank'>
                <img className={classes.judgeImg} src={JudgeTakeoff} alt='TAKEOFF'/>
              </Link>
              <br />
              <Typography variant='h4' align='center'>
                <strong>TAKEOFF</strong>
              </Typography>
              <Link href='https://www.instagram.com/yrntakeoff/?hl=en' target='_blank'>
                <Typography variant='h6' align='center'>
                  <strong>@yrntakeoff</strong>
                </Typography>
              </Link>
              <br />
              <Typography variant='h6' align='center'>
                Takeoff is a rapper, singer, and songwriter with several top 10 singles to his name as a member of Migos.
              </Typography>
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
                  Record an original hit song written by Starrah, produced by Murda Beatz, featuring Quavo and Takeoff
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
        <div className={classes.contact}>
          <Container maxWidth='lg'>
            <Grid container alignItems='center' spacing={4}>
              <Grid item xs={12}>
                <Typography variant='h4' align='center'>
                  Sign up now for alerts
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <NewsletterSignUp className={classes.newsletter}/>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.footer} maxWidth='md'>
          <Grid container alignItems='center' spacing={4}>
            <Grid item xs={12} sm={4} className={classes.socialButtons}>
              <Link href='https://www.facebook.com/trillervidsapp/' target='_blank'>
                <IconButton className={classes.footerButton}>
                  <img className={classes.footerIcon} src={Facebook} alt='Follow us on Facebook'/>
                  <HTMLComment text='By Raj Dev from freeicons.co'/>
                </IconButton>
              </Link>
              <Link href='https://www.twitter.com/triller' target='_blank'>
                <IconButton className={classes.footerButton}>
                  <img className={classes.footerIcon} src={Twitter} alt='Follow us on Twitter'/>
                  <HTMLComment text='By Icons8'/>
                </IconButton>
              </Link>
              <Link href='https://www.instagram.com/trillervids/' target='_blank'>
                <IconButton className={classes.footerButton}>
                  <img className={classes.footerIcon} src={Instagram} alt='Follow us on Instagram'/>
                  <HTMLComment text='By Iconfinder'/>
                </IconButton>
              </Link>
              <Link href='https://www.youtube.com/channel/UCOVQQTFALLID0EyoBMHaCsg' target='_blank'>
                <IconButton className={classes.footerButton}>
                  <img className={classes.wideFooterIcon} src={Youtube} alt='Follow us on Youtube'/>
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link href='https://triller.co'>
                <img className={classes.footerLogo} src={TrillerLogo} alt='Triller'/>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.downloadButtons}>
              <Typography variant='body1' style={{ display: 'inline-block', marginRight: 20 }}>
                <strong>Download</strong>
              </Typography>
              <Link href='https://itunes.apple.com/us/app/triller-social-video-platform/id994905763' target='_blank'>
                <IconButton className={classes.footerButton}>
                  <img className={classes.footerIcon} src={Apple} alt='Download at the Apple App Store'/>
                </IconButton>
              </Link>
              <Link href='https://play.google.com/store/apps/details?id=co.triller.droid&hl=en_US' target='_blank'>
                <IconButton className={classes.footerButton}>
                  <img className={classes.footerIcon} src={Google} alt='Download at the Goople Play Store'/>
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
