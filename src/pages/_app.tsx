import Head from 'next/head'
import 'focus-visible'
import { AppProps } from 'next/app'
import { Space_Mono } from 'next/font/google'
import GlobalStyle from '~lib/globalStyle'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${spaceMono.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Head>
        <title>devfinder</title>
        <meta name="description" content="Find dat genius bastard!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#141D2F" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
