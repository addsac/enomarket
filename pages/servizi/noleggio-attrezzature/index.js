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
            description="Per i tuoi eventi offriamo un servizio di noleggio attrezzature commerciali come panche e sedie, gazebi, ombrelloni, tavoli, banchi refrigerati, tank, fusti di birra a caduta, soprabanchi, celle frigo, frigovetrine, bicchieri e boccali e gadgettistica."
            category="Servizi"
            links={[
              { href: '/', label: 'Home' },
              { href: '/servizi/noleggio-attrezzature', label: 'Noleggio attrezzature' },
            ]}
          />

          {/* main image */}
          <div className="w-full h-[400px] lg:h-[800px]">
            <Image
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

          <ServicePhotoDescription
            title='Se stai per organizzare un evento per il tuo bar/ristorante o una festa per la tua attività?'
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
  }
}
