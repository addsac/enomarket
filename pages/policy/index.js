import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Spacing from "@/components/Spacing"
import { getProducts } from "@/lib/api"
import Head from "next/head"

export default function Home({ productsData }) {
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
            <Spacing height={125} />
            <Spacing height={125} />

            <div className="mx-auto w-full max-w-[800px] px-8 flex flex-col gap-y-8 text-4 leading-[170%]">
                <h1 className="text-28 text-center">
                    Privacy policy del sito Enomarket.eu
                </h1>

                <Spacing height={24} />
                
                <p className="text-18 leading-[170%]">
                    Welcome to Enomarket&apos;s privacy policy for our website.
                    This policy explains how we collect, use, and protect
                    your personal information when you use our services. We
                    take your privacy seriously, and we are committed to
                    protecting your personal information.
                </p>

                <p className="text-18 leading-[170%]">
                    Information we collect When you contact us for our web app,
                    we collect the following information:
                </p>

                <p className="text-18 leading-[170%]">
                    You company name, your email, and your message to us.
                    We use this information to provide you
                    with our web app services, as well as to communicate
                    with you about your account and any updates or changes
                    to our services.
                </p>

                <p className="text-21 font-family-lora opacity-60 -mb-2 mt-8">How we use your information</p>

                <p className="text-18 leading-[170%]">
                    We use your information to provide our web app services
                    to you, including processing your transactions, managing
                    your account, and communicating with you about your
                    account and our services. We may also use your
                    information to improve our services, perform data
                    analysis, and develop new products and services.
                </p>

                <p className="text-21 font-family-lora opacity-60 -mb-2 mt-8">How we protect your information</p>

                <p className="text-18 leading-[170%]">
                    We take the security of your personal information
                    seriously and use a variety of security measures to
                    protect it. These measures include encryption,
                    firewalls, and secure servers. We also limit access to
                    your personal information to authorized employees who
                    need to know that information to provide you with our
                    services.
                </p>

                <p className="text-21 font-family-lora opacity-60 -mb-2 mt-8">Sharing your information</p>

                <p className="text-18 leading-[170%]">
                    We do not sell, trade, or otherwise transfer your
                    personal information to third parties. However, we may
                    share your information with trusted third-party service
                    providers who assist us in providing our services, such
                    as hosting providers or payment processors. These
                    third-party service providers are required to use your
                    information only for the purpose of providing services
                    to us and are contractually obligated to keep your
                    information confidential.
                </p>

                <p className="text-21 font-family-lora opacity-60 -mb-2 mt-8">Your rights</p>

                <p className="text-18 leading-[170%]">
                    You have the right to access and update your personal
                    information at any time by logging into your account.
                    You also have the right to request that we delete your
                    personal information, subject to any legal or
                    contractual obligations we may have. If you have any
                    questions or concerns about your personal information,
                    please contact us at info@enomarket.eu.
                </p>

                <p className="text-18 leading-[170%]">
                    Changes to this policy We may update this privacy policy
                    from time to time, and any changes will be posted on
                    this page. By continuing to use our web app after any
                    changes to this policy, you consent to the updated
                    policy.
                </p>

                <p className="text-18 leading-[170%]">
                    If you have any questions or concerns about our privacy
                    policy or our services, please do not hesitate to
                    contact us at info@enomarket.eu.
                </p>
            </div>
          
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
      props: { 
        productsData
      },
      revalidate: 30, 
    }
  }
  