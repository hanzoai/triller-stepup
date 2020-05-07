import {
  Button,
  CssBaseline,
  Typography,
} from '@material-ui/core'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import App from 'next/app'
import Head from 'next/head'

import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import ReactFB from 'react-facebook-pixel'

import CookieConsent /* , { Cookies } */ from 'react-cookie-consent'

import {
  FB_ID,
  GA_ID,
} from '../src'

import theme from '../src/theme/app'

import {
  TITLE,
} from '../template.settings'

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw',

    '& > *:first-child': {
      flex: 1,
    },

    '& *': {
      outline: 0,
    },

    '& a': {
      cursor: 'pointer',
      textDecoration: 'none !important',
    },

    '& strong': {
      fontWeight: 600,
    },

    // '& > * > *': {
    //   zIndex: 1,
    // },

    '& button': {
      paddingTop: 12,
      paddingBottom: 12,
      lineHeight: 1.25,

      '& *': {
        lineHeight: 1.25,
      },
    },
  },
  header: {
    position: 'absolute',
    zIndex: 10000,

    '& *': {
      outline: 0,
    },

    '& a': {
      cursor: 'pointer',
      textDecoration: 'none !important',
    },
  },
  menu: {
    '& *': {
      outline: 0,
    },

    '& a': {
      cursor: 'pointer',
    },

    '& .bm-cross-button': {
      display: 'none',
    },
  },
  consent: {
    '& button': {
      marginRight: '100px !important',
      backgroundColor: '#E81A7B !important',
      color: '#FFF !important',
    },
  },
  footer: {

  },
}))

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactGA.initialize(GA_ID)
      ReactFB.init(FB_ID)

      ReactGA.pageview(window.location.pathname + window.location.search)
      ReactFB.pageView()
    }
  }, [])

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div id='body'>
          <div className={classes.header}/>
          <div className={classes.body}>
            <Component {...pageProps} />
          </div>
        </div>
        <div className={classes.footer}/>
        <div
          className={classes.consent}
        >
          <CookieConsent
            ButtonComponent={Button}
          >
            <Typography
              variant='body1'
            >
              This website uses cookies to enhance the user experience.
            </Typography>
          </CookieConsent>
        </div>
      </ThemeProvider>
    </>
  )
}


 // Only uncomment this method if you have blocking data requirements for
 // every single page in your application. This disables the ability to
 // perform automatic static optimization, causing every page in your app to
 // be server-side rendered.

 // MyApp.getInitialProps = async (appContext) => {
 //   // calls page's `getInitialProps` and fills `appProps.pageProps`
 //   const appProps = await App.getInitialProps(appContext);

 //   return { ...appProps }
 // }

export default MyApp
