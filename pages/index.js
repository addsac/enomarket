import Head from 'next/head'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Story from '@/components/Story'
import Spacing from '@/components/Spacing'
import GeneralInfo from '@/components/GeneralInfo'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getSlider, getProducts } from '../lib/api'

export default function Home({ sliderData, productsData }) {
  return (
    <>
      <Head>
        <title>Enomarket | Distribuzione Vini e Bevande a Fontaniva, PD </title>
        <meta name="description" content="Enomarket, siamo un'azienda di distribuzione beverage situata a Fontaniva, Padova specializzata in vini, birre, spirits, succhi, bevande e acqua. Offriamo anche servizi di assistenza a locali e fiere con noleggio di attrezzature e tutto il necessario per mantere impianti di spillatura." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header products={productsData} />

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

        <Products 
          subtitle="I nostri Prodotti"
          title="Vedi i marchi dei nostri prodotti disponibili"
          description="Selezioniamo con cura i migliori prodotti da tutto il mondo per permette di creare nei locali Italiani una carta dei vini e bevande completa e apprezzabile, rendendo unica l’esperienza dei nostri clienti e dei loro locali."
          array={productsData}
        />

        <Spacing height={125} />

        <Services 
          subtitle="I Serivizi"
          title="I nostri Servizi e consulenze per il mondo Horeca"
          description="La capacità di seguire i bisogni del cliente sin dalla progettazione,la professionalità di un servizio efficiente, la competenza di professionisti per dare il massimo al successo del tuo locale."
        />

        <Spacing height={125} />

        <Contact />
      </main>

      <Spacing height={125} />
      <Spacing height={125} />

      <Footer products={productsData} />
    </>
  )
}

export async function getStaticProps() {
  const sliderData = (await getSlider()) ?? []
  const productsData = (await getProducts()) ?? []

  return {
    props: { sliderData, productsData },
  }
}
