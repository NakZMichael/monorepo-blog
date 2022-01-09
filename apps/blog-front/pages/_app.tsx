import React, { useEffect, useState } from 'react';
import './styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { getTheme } from '../theme';
import createEmotionCache from '../tools/createEmotionCache';
import { ThemeProvider } from '@mui/material';
import { ModeContext, ModeContextType } from '../theme/mode';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function CustomApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = useState<ModeContextType['mode']>('light')
  useEffect(() => {
    const defaultMode = localStorage.getItem('mode') as ModeContextType['mode'] | undefined;
    setMode(defaultMode)
  },[])
  useEffect(() => {
    window.localStorage.setItem('mode', mode,)
  },[mode])
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Nakazatoのブログ</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
      </Head>
      <ModeContext.Provider value={{
        mode,setMode
      }}>
        <ThemeProvider theme={getTheme(mode)} >
          <CssBaseline />
          <Header/>
          <main
            className="app"
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center'
            }}
          >
            <Component 
              {...pageProps}
            />
          </main>
          <Footer style={{marginTop:20}} />
        </ThemeProvider>
      </ModeContext.Provider>
    </CacheProvider>
  );
}

export default CustomApp;
