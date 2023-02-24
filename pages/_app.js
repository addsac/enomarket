import '@/styles/globals.css'
import { Montserrat, Lora, Open_Sans  } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>{`
      html {
        font-family: ${openSans.style.fontFamily};
      }
      .font-family-montserrat {
        font-family: ${montserrat.style.fontFamily};
      }
      .font-family-lora {
        font-family: ${lora.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps}  />
  </>
}
