import Head from 'next/head'
import Slider from '@/components/Slider'
import Story from '@/components/Story'
import Spacing from '@/components/Spacing'
import GeneralInfo from '@/components/GeneralInfo'
import { getSlider } from '../lib/api'

export default function Home({ sliderData }) {
  return (
    <>
      <Head>
        <title>Enomarket | Distribuzione Vini e Bevande a Fontaniva, PD </title>
        <meta name="description" content="Enomarket, siamo un'azienda di distribuzione beverage situata a Fontaniva, Padova specializzata in vini, birre, spirits, succhi, bevande e acqua. Offriamo anche servizi di assistenza a locali e fiere con noleggio di attrezzature e tutto il necessario per mantere impianti di spillatura." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider sliderData={ sliderData } />

        <Spacing height={125} />

        <Story />

        <Spacing height={125} />

        <GeneralInfo 
          subtitle="Il nostro Lavoro"
          title="Da più di 40 anni qualità e passione al servizio del Beverage"
          array={[
            {
              icon: 'pin',
              title: 'Consegne a Padova, Vicenza, treviso',
              description: 'Consegne in 1/3 giorni gestite con i mezzi e personale interno dell’ azienda per garantire un servizio puntuale, sicuro ed efficiente'
            },
            {
              icon: 'shield',
              title: 'Alta qualità dei prodotti garantita',
              description: 'Consegne in 1/3 giorni gestite con i mezzi e personale interno dell’ azienda per garantire un servizio puntuale, sicuro ed efficiente'
            },
            {
              icon: 'clock',
              title: 'Professionalità e precisione nelle consegne',
              description: 'Consegne in 1/3 giorni gestite con i mezzi e personale interno dell’ azienda per garantire un servizio puntuale, sicuro ed efficiente'
            },
          ]}
        />

        <Spacing height={125} />

      </main>
    </>
  )
}

export async function getStaticProps() {
  const sliderData = (await getSlider()) ?? []

  return {
    props: { sliderData },
  }
}
