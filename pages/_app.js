import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Montserrat, Lora, Open_Sans  } from '@next/font/google'
import { useRouter } from 'next/router'

const montserrat = Montserrat({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter().asPath

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
      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={router}
          initial={{ opacity: 0, y: 17 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 17 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  </>
}
