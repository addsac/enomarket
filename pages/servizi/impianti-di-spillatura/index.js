import Head from 'next/head'
import Header from '@/components/Header'
import Spacing from '@/components/Spacing'
import Container from '@/components/Container'
import OtherPageHeading from '@/components/OtherPageHeading'
import GridDetails from '@/components/GridDetails'
import ServicePhotoDescription from '@/components/ServicePhotoDescription'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getProducts } from '@/lib/api'
import Image from 'next/image'

export default function ImpiantiDiSpillatura({ productsData }) {
  return (
    <>
      <Head>
        <title> Impianti di Spillatura | Enomarket </title>
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
            title="Impianti di Spillatura"
            description="Siamo in grado di aiutarti a scegliere l’impianto di spillatura di vino, birra e bevande più adatto alle tue esigenze, programmando insieme tutte le attività obbligatorie necessarie al loro mantenimento grazie ai nostri tecnici."
            category="Servizi"
            links={[
              { href: '/', label: 'Home' },
              { href: '/servizi/impianti-di-spillatura', label: 'Impianti di Spillatura' },
            ]}
          />

          {/* main image */}
          <div className="w-full h-[400px] lg:h-[800px]">
            <Image
              src="/images/servizi-impianti_di_spillatura.jpg" 
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
            title='Un team di professionisti per aiutarti a scegliere l’impianto più giusti per te.'
            description='Possiamo aiutarti in tutto il necessario per rendere la tua attività completa, dalla scelta dell’impianto, l’installazione, la manutenzione ordinaria e straordiaria, le sanificazioni periodiche, fino agli interventi tecnici, siamo sempre pronti a garantirti affidabilità, sicurezza e interventi immediati.'
            photo='/images/servizi-impianti_di_spillatura1.jpg'
            order={1}
          />

          <ServicePhotoDescription
            texts={
              [
                {
                  title : 'Gli impianti di spillatura disponibili:',
                  description : [
                    'Vini', 'Birre', 'Bevande', 'In fusto a caldo, a freddo, fissi o mobili'
                  ]
                },
                {
                  title : 'I servizi aggiuntivi disponibili:',
                  description : [
                    'Assistenze periodiche', 'Manutenzione', 'Sostituzione di ricambi', 'Sanificazione'
                  ]  
                }
              ]
            }
            photo='/images/servizi-impianti_di_spillatura2.jpg'
            order={2}
          />
        </Container>

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
