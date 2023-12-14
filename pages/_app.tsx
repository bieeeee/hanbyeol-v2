import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Montserrat } from 'next/font/google'
import { LazyMotion, m, domAnimation } from 'framer-motion';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
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
