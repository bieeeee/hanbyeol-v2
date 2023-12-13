import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Montserrat } from 'next/font/google'

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
      <main className={`${inter.variable} ${montserrat.variable}`}>
        <Component {...pageProps} />
      </main>
    )
}
