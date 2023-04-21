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
          title="Dal 1969 qualità e passione al servizio del Beverage"
          array={[
            {
              icon: 'pin',
              title: 'Consegne a Padova, Vicenza, Treviso',
              description: 'Il nostro servizio va oltre la consegna della merce organizzando anche visite in cantina, incontri con il produttore, possibilità di toccare il prodotto con mano e consulenza sul vino. A ciò si aggiungono la produzione di carte vino e la formazione del personale.'
            },
            {
              icon: 'shield',
              title: 'Alta qualità dei prodotti garantita',
              description: 'Mettiamo a disposizione dei nostri clienti il meglio che il mercato possa offrire. Oltre alle cantine più blasonate, alle birre e agli spirits più sofisticati proponiamo la nostra selezione che interpreta in pieno la cultura del “bere bene”. Piccoli birrifici artigianali, micro cantine e distillatori che lavorano con metodi ancestrali rientrano nel nostro patrimonio di valori.'
            },
            {
              icon: 'clock',
              title: 'Professionalità e precisione nelle consegne',
              description: 'Consegniamo i prodotti nell’arco di 1 o 3 giorni gestendo il trasporto con nostri mezzi aziendali per garantire la massima affidabilità e un servizio sempre puntuale per il cliente.'
            },
          ]}
        />

        <Spacing height={125} />

        <Products 
          subtitle="I nostri Prodotti"
          title="La nostra selezione tra i migliori brand"
          description="Selezioniamo con cura i migliori prodotti provenienti da tutto il mondo per consentirvi di creare nei locali una carta vini e bevande completa e apprezzabile, rendendo unica l’esperienza per la clientela."
          array={productsData}
        />

        <Spacing height={125} />

        <Services 
          subtitle="I Serivizi"
          title="I nostri Servizi e consulenze per il mondo Horeca"
          description="La capacità di perseguire i bisogni del cliente sin dalla progettazione, la professionalità di un servizio efficiente e la competenza nel settore per garantire il massimo successo al tuo locale."
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
    props: { 
      sliderData, productsData
    },
    revalidate: 30, 
  }
}
