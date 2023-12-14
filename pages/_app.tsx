import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Montserrat } from 'next/font/google'
import { LazyMotion, m, domAnimation } from 'framer-motion';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${montserrat.variable} w-full h-screen overflow-x-hidden overflow-y-scroll font-bodyFont bg-bodyColor  text-textLight`}>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} m={m} />
      </LazyMotion>
    </main>
  )
}
