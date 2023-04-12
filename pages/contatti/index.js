import Head from 'next/head'
import Header from '@/components/Header'
import Spacing from '@/components/Spacing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getProducts } from '@/lib/api'

export default function Contatti({ productsData }) {
  return (
    <>
      <Head>
        <title>Contatti | Enomarket | Distribuzione Vini e Bevande a Fontaniva, PD </title>
        <meta name="description" content="Enomarket, siamo un'azienda di distribuzione beverage situata a Fontaniva, Padova specializzata in vini, birre, spirits, succhi, bevande e acqua. Offriamo anche servizi di assistenza a locali e fiere con noleggio di attrezzature e tutto il necessario per mantere impianti di spillatura." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header products={productsData} />

      <main>
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
