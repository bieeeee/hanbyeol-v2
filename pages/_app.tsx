import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Montserrat } from 'next/font/google';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>
        {`
      :root {
        --inter-font: ${inter.style.fontFamily};
        --font-montserrat: ${montserrat.style.fontFamily};
      }
    `}
      </style>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} m={m} />
      </LazyMotion>
    </>
  )
}

export default appWithTranslation(App)
