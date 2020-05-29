import {
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Fade,
  Grid,
  Grow,
  IconButton,
  Link,
  Typography,
  Slide,
  useMediaQuery,
} from '@material-ui/core'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

import React, { useEffect, useState } from 'react'
import HTMLComment from 'react-html-comment'
import ModalVideo from 'react-modal-video'
import ReactYouTube from 'react-youtube'
import Vimeo from '@u-wave/react-vimeo'

import Countdown from '../components/Countdown'
import NewsletterSignUp from '../components/NewsletterSignUp'
import Rules from '../components/Rules'

import TrillerBG from '../assets/trillerbg4.jpg'
// import TrillerBG2 from '../assets/trillerbg2.png'
// import StartRecording from '../assets/startrecording.png'
// import HowToAudition from '../assets/howtoaudition.png'
import DownloadNow from '../assets/downloadnow.png'
import AppStore from '../assets/appstore.png'
import PlayStore from '../assets/playstore.png'
import StepUpLogo1 from '../assets/trillerheader2.png'
// import StepUpLogo2 from '../assets/stepuplogo2.png'
import Prize from '../assets/prize.png'
import TrillerLogo from '../assets/logo-triller.png'
// import BoostLogo from '../assets/logo-boost.png'
import CallingAllArtists from '../assets/calingallartists.png'
import GrandPrizes from '../assets/grandprizes.png'
import Record from '../assets/record.png'
import Judges from '../assets/judges.png'
import FAQINFO from '../assets/faqandinfo.png'
import TrillerIcon from '../assets/trillericon.png'

import HowTo1 from '../assets/howto1.png'
import HowTo2 from '../assets/howto2.png'
import HowTo3 from '../assets/howto3.png'

import JudgeStarrah from '../assets/judges/starrah.jpg'
import JudgeMurda from '../assets/judges/murda.jpg'
import JudgeQuavo from '../assets/judges/quavo.jpg'
import JudgeTakeoff from '../assets/judges/takeoff.jpg'
import Amara from '../assets/judges/amara.jpg'

import Facebook from '../assets/social/facebook.png'
import Twitter from '../assets/social/twitter.svg'
import Instagram from '../assets/social/instagram.svg'
import Youtube from '../assets/social/youtube.png'
import Apple from '../assets/social/apple.png'
import Google from '../assets/social/google.png'

import Auditions1Video from '../assets/auditions-week1.jpg'
import Auditions2Video from '../assets/auditions-week2.jpg'
import IntroVideo from '../assets/introvideoscreen.jpg'
import HowToVideo from '../assets/youtubeoverlay.jpg'

import faqConfig from '../src/config/faq'

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
  howToAudition: {
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
    border: '2px solid white',
    borderRadius: 8,

    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },
  playStoreImg: {
    display: 'block',
    marginRight: 'auto',
    maxWidth: 200,
    width: '100%',
    border: '2px solid white',
    borderRadius: 8,

    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
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
    textDecoration: 'uppercase',
  },
  callAllArtistImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1200,
    width: '100%',
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
    // paddingTop: '5vh',
    paddingBottom: '10vh',
  },
  // judgesImg: {
  //   display: 'block',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   maxWidth: 1000,
  //   width: '100%',
  //   marginBottom: theme.spacing(4),
  // },
  judgeImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  amaraImg: {
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
  faq: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
  faqImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  faqAnswer: {
    backgroundColor: 'rgb(0,0,0,0.4)',
  },

  hashtags: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },

  directions: {
    textTransform: 'uppercase',
  },

  video: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },

  trillerHandle: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    pointerEvents: 'none',
  },

  trillerHandle2: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    pointerEvents: 'none',
  },

  trillerIcon: {
    display: 'inline-block',
    height: '1.5rem',
    transform: 'translate(2px, .35rem)',
  },

  howToImg: {
    maxWidth: 240,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    transform: 'translateX(-20px)',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },

  playable: {
    position: 'relative',
    pointerEvents: 'none',
    // cursor: 'pointer',
  },

  playIcon: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    display: 'none',
  },

  playable2: {
    transform: 'translateY(.35rem) scale(.8)',
    color: '#FFF',
    display: 'none',
  },

  intro: {
    maxWidth: 640,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    position: 'relative',
  },

  introImg: {
    width: '100%',
    zIndex: 100,
    cursor: 'pointer',
    filter: 'brightness(80%)',
  },

  introPlayIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '4rem',
    zIndex: 101,
    pointerEvents: 'none',
  },

  howToContainer: {
    maxWidth: 300,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    position: 'relative',
  },

  howToImg2: {
    width: '100%',
    zIndex: 100,
    cursor: 'pointer',
    filter: 'brightness(75%)',
  },
  audition: {
    maxWidth: 640,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    position: 'relative',
    marginBottom: '10vh',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '15vh',
    }
  },
  auditionsImg: {
    width: '100%',
    zIndex: 100,
    cursor: 'pointer',
    filter: 'brightness(80%)',
  },
}))

export default () => {
  const classes = useStyles()

  const theme = useTheme()
  const isBelowSM = useMediaQuery(theme.breakpoints.down('sm'))

  const [openStarrah, setOpenStarrah] = useState(false)
  const [openMurda, setOpenMurda] = useState(false)
  const [openQuavo, setOpenQuavo] = useState(false)
  const [openTakeoff, setOpenTakeoff] = useState(false)
  const [openAmara, setOpenAmara] = useState(false)

  const [openAuditions1, setOpenAuditions1] = useState(isBelowSM)
  const [openAuditions2, setOpenAuditions2] = useState(isBelowSM)
  const [openIntro, setOpenIntro] = useState(isBelowSM)
  const [openHowTo, setOpenHowTo] = useState(isBelowSM)

  // const [logoShow, setLogoShow] = useState(false)
  // const [slide1, setSlide1] = useState(false)
  // const [slide2, setSlide2] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSlide1(true)
  //   }, 200)

  //   setTimeout(() => {
  //     setSlide2(true)
  //   }, 800)

  //   setTimeout(() => {
  //     setLogoShow(true)
  //   }, 1400)
  // }, [])
  //
  const ratio = 812/375

  const opts: any = {
    height: 300 * ratio,
    width: 300,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 1,
      autoplay: 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
    },
  }

  const opts2: any = {
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 1,
      autoplay: isBelowSM ? 0 : 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
    },
  }

  const modalOpts = {
    controls: 1,
    autoplay: isBelowSM ? 0 : 1,
    modestbranding: 1,
    playsinline: 1,
    rel: 0,
  }

  const modalRatio = (typeof window == 'undefined') ? '3:2' : `${window.innerWidth+200}:${window.innerHeight}`

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
        <Container className={classes.judges} maxWidth='lg'>
          <Grid container alignItems='flex-start' spacing={4}>
            <Grid item xs={12}>
              <Typography variant='h3' align='center' className={classes.auditions}>
                AUDITIONS NOW CLOSED
              </Typography>
              <Typography variant='h3' align='center' className={classes.auditions}>
                ANNOUNCING THE TOP 30
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Container maxWidth='md'>
                <Typography variant='h4' align='center'>
                  Voting Opens June 5th, 2020
                </Typography>

                <Countdown target='2020-06-05 23:59:59-04:00'/>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <div
                className={classes.intro}
              >
                <div style={{ opacity: openIntro || isBelowSM ? 0 : 1 }}>
                  <img src={IntroVideo} alt='Intro to Triller StepUp' className={classes.introImg} onClick={() => setOpenIntro(true)}/>
                  <PlayCircleOutlineIcon className={classes.introPlayIcon}/>
                </div>
                {
                  (openIntro || isBelowSM) &&
                  (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                      <Vimeo
                        video='416390093'
                        showTitle={false}
                        showPortrait={false}
                        sidedock={false}
                        controls={false}
                        responsive={true}
                        autoplay={!isBelowSM && openIntro}
                      />
                    </div>
                  )
                }
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h4' align='center' className={classes.auditions}>
                WEEK 1 AUDITIONS
              </Typography>
              <br/>
              <div
                className={classes.audition}
              >
                <div style={{ opacity: openAuditions1 || isBelowSM ? 0 : 1 }}>
                  <img src={Auditions1Video} alt='WEEK 1 AUDITIONS' className={classes.auditionsImg} onClick={() => setOpenAuditions1(true)}/>
                  <PlayCircleOutlineIcon className={classes.introPlayIcon}/>
                </div>
                {
                  (openAuditions1 || isBelowSM) &&
                  (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                      <ReactYouTube className={classes.video} videoId='Ix-6fRRae3g' opts={opts2}/>
                    </div>
                  )
                }
              </div>
              <br/>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h4' align='center' className={classes.auditions}>
                WEEK 2 AUDITIONS
              </Typography>
              <br/>
              <div
                className={classes.audition}
              >
                <div style={{ opacity: openAuditions2 || isBelowSM ? 0 : 1 }}>
                  <img src={Auditions2Video} alt='WEEK 2 AUDITIONS' className={classes.auditionsImg} onClick={() => setOpenAuditions2(true)}/>
                  <PlayCircleOutlineIcon className={classes.introPlayIcon}/>
                </div>
                {
                  (openAuditions2 || isBelowSM) &&
                  (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                      <ReactYouTube className={classes.video} videoId='vRAiNE7edjY' opts={opts2}/>
                    </div>
                  )
                }
              </div>
              <br/>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h4' align='center' className={classes.auditions}>
                WEEK 3 AUDITIONS
              </Typography>
              <br/>
              <div
                className={classes.audition}
              >
                <div style={{ opacity: openAuditions2 || isBelowSM ? 0 : 1 }}>
                  <img src={Auditions2Video} alt='WEEK 2 AUDITIONS' className={classes.auditionsImg} onClick={() => setOpenAuditions2(true)}/>
                  <PlayCircleOutlineIcon className={classes.introPlayIcon}/>
                </div>
                {
                  (openAuditions2 || isBelowSM) &&
                  (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                      <ReactYouTube className={classes.video} videoId='vRAiNE7edjY' opts={opts2}/>
                    </div>
                  )
                }
              </div>
              <br/>
              <br/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h3' align='center' className={classes.auditions}>
                MEET YOUR HOSTS & JUDGES
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.playable} onClick={() => setOpenStarrah(true)}>
                <img className={classes.judgeImg} src={JudgeStarrah} alt='STARRAH'/>
                <PlayCircleOutlineIcon className={classes.playIcon}/>
              </div>
              <ModalVideo channel='youtube' youtube={modalOpts} ratio={modalRatio} isOpen={openStarrah} videoId='kBQYcmMxXpI' onClose={() => setOpenStarrah(false)} />
              <br />
              <Typography variant='h4' align='center'>
                <strong>STARRAH</strong>
              </Typography>
              <Typography variant='h6' align='center' className={classes.trillerHandle} onClick={() => setOpenStarrah(true)}>
                <img src={TrillerIcon} className={classes.trillerIcon} alt='Triller'/><strong>@whereisstarrah</strong>
                <PlayCircleOutlineIcon className={classes.playable2}/>
              </Typography>
              <br />
              <Typography variant='h6' align='center'>
                Starrah has written 14 singles that have reached the Top 20 on the
                Billboard Hot 100;  two of which went No. 1 (“Havana” by Camila
                Cabello and “Girls Like You” by Maroon 5) and five peaking in the top 10.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.playable} onClick={() => setOpenMurda(true)}>
                <img className={classes.judgeImg} src={JudgeMurda} alt='MURDA BEATZ'/>
                <PlayCircleOutlineIcon className={classes.playIcon}/>
              </div>
              <ModalVideo channel='youtube' youtube={modalOpts} ratio={modalRatio} isOpen={openMurda} videoId='Uv8_LVLHm5w' onClose={() => setOpenMurda(false)} />
              <br />
              <Typography variant='h4' align='center'>
                <strong>MURDA BEATZ</strong>
              </Typography>
              <Typography variant='h6' align='center' className={classes.trillerHandle} onClick={() => setOpenMurda(true)}>
                <img src={TrillerIcon} className={classes.trillerIcon} alt='Triller'/><strong>@murdabeatz</strong>
                <PlayCircleOutlineIcon className={classes.playable2}/>
              </Typography>
              <br />
              <Typography variant='h6' align='center'>
                Murda Beatz has produced numerous hit singles for top rappers including Travis Scott, Gucci Mane, Drake, Migos, and 6ix9ine, alongside frequent collaborators Cubeatz.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.playable} onClick={() => setOpenQuavo(true)}>
                <img className={classes.judgeImg} src={JudgeQuavo} alt='QUAVO'/>
                <PlayCircleOutlineIcon className={classes.playIcon}/>
              </div>
              <ModalVideo channel='youtube' youtube={modalOpts} ratio={modalRatio} isOpen={openQuavo} videoId='IQdyCPq8rT8' onClose={() => setOpenQuavo(false)} />
              <br />
              <Typography variant='h4' align='center'>
                <strong>QUAVO</strong>
              </Typography>
              <Typography variant='h6' align='center' className={classes.trillerHandle2} onClick={() => setOpenQuavo(true)}>
                <img src={TrillerIcon} className={classes.trillerIcon} alt='Triller'/><strong>@quavohuncho</strong>
                <PlayCircleOutlineIcon className={classes.playable2}/>
              </Typography>
              <br/>
              <Typography variant='h6' align='center'>
                Quavo is a rapper, singer, songwriter, and record producer, best known as a member of Migos and has numerous hits that have made the top 10 of the Billboard Hot 100 with Migos and other collaborations.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.playable} onClick={() => setOpenTakeoff(true)}>
                <img className={classes.judgeImg} src={JudgeTakeoff} alt='TAKEOFF'/>
                <PlayCircleOutlineIcon className={classes.playIcon}/>
              </div>
              <ModalVideo channel='youtube' youtube={modalOpts} ratio={modalRatio} isOpen={openTakeoff} videoId='kYPs1X3NlJo' onClose={() => setOpenTakeoff(false)} />
              <br />
              <Typography variant='h4' align='center'>
                <strong>TAKEOFF</strong>
              </Typography>
              <Typography variant='h6' align='center' className={classes.trillerHandle2} onClick={() => setOpenTakeoff(true)}>
                <img src={TrillerIcon} className={classes.trillerIcon} alt='Triller'/><strong>@yrntakeoff</strong>
                <PlayCircleOutlineIcon className={classes.playable2}/>
              </Typography>
              <br />
              <Typography variant='h6' align='center'>
                Takeoff is a rapper, singer, and songwriter with several top 10 singles to his name as a member of Migos.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h4' align='center' className={classes.auditions}>
                BOOST MOBILE AMBASSADOR
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.playable} style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} onClick={() => setOpenAmara(true)}>
                <img className={classes.amaraImg} src={Amara} alt='Amara'/>
                <PlayCircleOutlineIcon className={classes.playIcon}/>
              </div>
              <ModalVideo channel='youtube' youtube={modalOpts} ratio={modalRatio} isOpen={openAmara} videoId='BfB002W8CzY' onClose={() => setOpenAmara(false)} />
              <br />
              <Typography variant='h4' align='center'>
                <strong>AMARA LA NEGRA</strong>
              </Typography>
              <Typography variant='h6' align='center' className={classes.trillerHandle2} onClick={() => setOpenAmara(true)}>
                <img src={TrillerIcon} className={classes.trillerIcon} alt='Triller'/><strong>@amaralanegraaln</strong>
                <PlayCircleOutlineIcon className={classes.playable2}/>
              </Typography>
              <br/>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.apps} maxWidth='lg'>
          <Grid container alignItems='center' spacing={4}>
            <Grid item xs={12}>
              <br/>
              <br/>
              <br/>
              <br/>
              <img className={classes.downloadNowImg} src={DownloadNow} alt='Download Triller App Now'/>
            </Grid>
            <Grid item xs={6}>
              <Link href='/appstore' rel='nofollow' target='_blank'>
                <img className={classes.appStoreImg} src={AppStore} alt='Download on the AppStore'/>
              </Link>
              <br/>
              <br/>
              <br/>
              <br/>
            </Grid>
            <Grid item xs={6}>
              <Link href='/playstore' rel='nofollow' target='_blank'>
                <img className={classes.playStoreImg} src={PlayStore} alt='Get It On Google Play'/>
              </Link>

              <br/>
              <br/>
              <br/>
              <br/>
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
                  Record an original hit song written by Starrah, produced by Murda Beatz and featuring Quavo & Takeoff
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

        <Container className={classes.faq} maxWidth='sm'>
          <img className={classes.faqImg} src={FAQINFO} alt='FAQ & Information'/>
          <br/>
          { faqConfig.faqs.map((x: any, i) => (
            <ExpansionPanel key={x.question}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={x.question}
                id={`question-header${i}`}
              >
                <Typography variant='body1'>{x.question}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.faqAnswer}>
                {x.answer}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
          <br/>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls='STEP UP TO THE MIC CONTEST (POWERED BY BOOST MOBILE®) OFFICIAL RULES'
              id='official-rules'
            >
              <Typography variant='body1'>STEP UP TO THE MIC CONTEST (POWERED BY BOOST MOBILE®) OFFICIAL RULES</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.faqAnswer}>
              <Rules/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
              <Link href='/appstore' target='_blank'>
                <IconButton className={classes.footerButton}>
                  <img className={classes.footerIcon} src={Apple} alt='Download at the Apple App Store'/>
                </IconButton>
              </Link>
              <Link href='/playstore' target='_blank'>
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
