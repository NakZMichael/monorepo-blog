import React from 'react';
import './styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme } from '../theme';
import createEmotionCache from '../tools/createEmotionCache';
import { ThemeProvider } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function CustomApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Nakazatoのブログ</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
      </Head>
      <ThemeProvider theme={theme} >
        <Header/>
        <main
          className="app"
          style={{
            flexGrow:1,
          }}
        >
          <Component 
            {...pageProps}
          />
        </main>
        <Footer style={{marginTop:20}} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default CustomApp;
