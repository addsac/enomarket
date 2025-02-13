import Head from 'next/head'
import Header from '@/components/Header'
import Spacing from '@/components/Spacing'
import Container from '@/components/Container'
import OtherPageHeading from '@/components/OtherPageHeading'
import GridDetails from '@/components/GridDetails'
import ServicePhotoDescription from '@/components/ServicePhotoDescription'
import SliderNoleggioAttrezzature from '@/components/SliderNoleggioAttrezzature'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getProducts } from '@/lib/api'
import Image from 'next/image'

export default function NoleggioAttrezzature({ productsData }) {
  return (
    <>
      <Head>
        <title> Noleggio attrezzature | Enomarket </title>
        <meta name="description" content="Enomarket, siamo un'azienda di distribuzione beverage situata a Fontaniva, Padova specializzata in vini, birre, spirits, succhi, bevande e acqua. Offriamo anche servizi di assistenza a locali e fiere con noleggio di attrezzature e tutto il necessario per mantere impianti di spillatura." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header products={productsData} />

      <main>
      <Spacing height={125} />

        {/* main content */}
        <Container>
          {/* first text info */}
          <OtherPageHeading 
            title="Noleggio Attrezzature"
            description="Per i tuoi eventi offriamo un servizio in comodato o a noleggio di attrezzature come set birreria, gazebi, ombrelloni, banchi refrigerati, tank, fusti di birra a caduta,spillatore soprabanchi, chioschi, frigovetrine, bicchieri e boccali e gadgettistica."
            category="Servizi"
            links={[
              { href: '/', label: 'Home' },
              { href: '/servizi/noleggio-attrezzature', label: 'Noleggio attrezzature' },
            ]}
          />

          {/* main image */}
          <div className="w-full h-[400px] lg:h-[800px]">
            <img
              src="/images/servizi-noleggio_attrezzature3.jpg"
              width="800" 
              height="800" 
              alt="" 
              className="w-full h-full object-cover opacity-90" 
            />
          </div>

          <GridDetails 
            array={[
              {
                icon: 'pin',
                title: 'Consegne a Padova, Vicenza, Treviso',
                description: 'Il servizio và oltre la consegna della bottiglia: visite in cantina, incontri con il produttore, possibilità di toccare il prodotto con mano; consulenza sul vino, produzione di carte vino, formazione del personale'
              },
              {
                icon: 'shield',
                title: 'Alta qualità dei prodotti garantita',
                description: 'Mettiamo a disposizione dei nostri clienti il meglio che il mercato offre. Oltre alle cantine più blasonate e alle birre e agli spirit più sofisticati, proponiamo la nostra selezione che interpreta la cultura del bere bene. Piccoli birrifici artigianali, micro cantine, distillatori che lavorano con metodi ancestrali.'
              },
              {
                icon: 'clock',
                title: 'Professionalità e precisione nelle consegne',
                description: 'Consegniamo i nostri prodotti in 1/3 giorni gestite con i nostri mezzi aziendali interni all’ azienda per garantire affidabilità ed un servizio sempre puntuale per il cliente.'
              },
            ]}
          />

          <ServicePhotoDescription
            title='Se stai per organizzare un evento sul tuo lovale, una manifestazione o un evento privato'
            description='Enomarket ti può offrire il noleggio di tutte le attrezzature e materiali che hai bisogno, la consulenza e l’assistenza tecnica necessaria per l’intero corso della tua manifestazione.'
            photo='/images/servizi-noleggio_attrezzature1.jpg'
            order={1}
          />

          <ServicePhotoDescription
            texts={
              [
                {
                  title : 'Le attrezzature disponibili:',
                  description : [
                    'panche e sedie',
                    'gazebi',
                    'ombrelloni',
                    'tavoli',
                    'impianti di spillatura',
                    'banchi refrigerati',
                    'tank',
                    'fusti di birra a caduta',
                    'soprabanchi',
                    'cellefrigo',
                    'frigovetrine',
                    'bicchieri e boccali',
                    'gadgettistica'
                  ]
                },
              ]
            }
            photo='/images/servizi-noleggio_attrezzature2.jpg'
            order={2}
          />
        </Container>

        <Spacing height={125} />

        <SliderNoleggioAttrezzature />

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
  const productsData = (await getProducts()) ?? []

  return {
    props: { productsData },
    revalidate: 30, 
  }
}
