import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './styles.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';
import React from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
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
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
