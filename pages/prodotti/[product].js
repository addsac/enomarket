import Container from '@/components/Container'
import Header from '@/components/Header'
import OtherPageHeading from '@/components/OtherPageHeading'
import Spacing from '@/components/Spacing'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { getMarks, getProducts } from '@/lib/api'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Generates `/prodotti/1` and `/prodotti/2`
export async function getStaticPaths() {
    // Call an external API endpoint to get the products
    const productsData = (await getProducts()) ?? []

    if(productsData.length > 0) {
        // Get the paths we want to pre-render based on products
        const paths = productsData.map((product) => ({
          params: { product: product.fields.nome.replace(' ', '-').toLowerCase() },
        }))

        // adding the route for the categories
        productsData.map((product) => {
          if(product.fields.categorie){
            product.fields.categorie.map((category) => {
              paths.push({ params: { product: category.fields.nome.replace(' ', '-').toLowerCase() } })
            })
          }
        })

        return { paths: paths, fallback: false }
    }

    return { paths: [], fallback: false }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    const { params } = context
    const { product } = params
    let productParent = ''

    // Fetch the product from the API
    const productsList = (await getProducts()) ?? []
    let productData = productsList.filter((productItem) => productItem.fields.nome.replace(' ', '-').toLowerCase() == product)

    if(productData.length == 0) { 
      // find the product with the categorory
      productData = productsList.filter((productItem) => {
        if(productItem.fields.categorie){
          productParent = productItem.fields.nome

          return productItem.fields.categorie.filter((category) => category.fields.nome.replace(' ', '-').toLowerCase() == product)
        }
      })

      productData = productData[0].fields.categorie.filter((category) => category.fields.nome.replace(' ', '-').toLowerCase() == product)
    }

    // Catch the logos if it's not a product page choosing the category
    if(!productData[0].fields.categorie){
      if(!productData[0].fields.descrizione){
        // product - category
        
        // console.log(product) // bottiglie-classiche
        // console.log(productData[0].fields.nome) // Bottiglie classiche
        // console.log(productParent) // Birre

        const marks = (await getMarks(productData[0].fields.nome, productParent)) ?? []

        return {
          // Passed to the page component as props
          props: { product: productData, productsList: productsList, marks: marks },
        }
      }
      else if(productData[0].fields.descrizione){
        // product - not category
        // console.log(product) // birre
        const marks = (await getMarks(productData[0].fields.nome)) ?? []

        return {
          // Passed to the page component as props
          props: { product: productData, productsList: productsList, marks: marks },
        }
      }
    }

    return {
      // Passed to the page component as props
      props: { product: productData, productsList: productsList },
    }
  }

export default function Product({ product, productsList, marks }) {
    console.log(marks)

    return (
      <>
        <Head>
          {/* <title> { product[0].fields.nome } | Enomarket </title> */}
          <meta name="description" content="Enomarket, siamo un'azienda di distribuzione beverage situata a Fontaniva, Padova specializzata in vini, birre, spirits, succhi, bevande e acqua. Offriamo anche servizi di assistenza a locali e fiere con noleggio di attrezzature e tutto il necessario per mantere impianti di spillatura." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header products={productsList} />

        <main>
          <Spacing height={125} />

          <Container>
            {/* Pagina prodotto */}
            { !product[0].fields.categorie && (
              <>
                
                {/* product - category */}
                {!product[0].fields.descrizione && 
                (
                  <p>Categoria</p>
                )}

                {/* product - not category */}
                {product[0].fields.descrizione && (
                  <p>Prodotto</p>
                )}

              </>
            )}

            {/* Pagina scelta categoria */}
            { product[0].fields.categorie?.length > 0 && (
              <>
                <OtherPageHeading 
                  title={product[0].fields.nome}
                  description={product[0].fields.descrizione.content[0].content[0].value}
                  category="Prodotti"
                  links={[
                    { href: '/', label: 'Home' },
                    { 
                      href: '/servizi/' + product[0].fields.nome.replace(' ', '-').toLowerCase(), 
                      label: product[0].fields.nome 
                    },
                  ]}
                />

                {/* main image */}
                <div className="w-full h-[400px] lg:h-[800px]">
                  <Image
                    src={'https:'+product[0].fields.foto.fields.file.url}
                    width="800" 
                    height="800" 
                    alt={product[0].fields.foto.fields.file.name}
                    className="w-full h-full object-cover opacity-90" 
                  />
                </div>

                <div className='text-center flex flex-col gap-y-10'>
                  <p className='text-decoration-wide font-family-montserrat'> 
                    Le categorie
                  </p>
                  <p className='text-28 lg:text-44 font-family-lora leading-[140%]'>
                    Scegli il formato che cerchi
                  </p>
                </div>

                {/* photos */}
                <div className='grid grid-cols-12 gap-x-6 gap-y-[125px]'>
                  {product[0].fields.categorie.map( item => (
                    <div
                      key={item.sys.id} 
                      className="col-span-6 lg:col-span-4 flex flex-col gap-y-6"
                    >
                      <Link
                        href={'/prodotti/'+item.fields.nome.replace(' ', '-').toLowerCase()}
                        className='bg-gray-700 w-full h-[300px] lg:h-[600px] overflow-clip group cursor-pointer'
                      >
                        <Image 
                          src={'https:'+item.fields.foto.fields.file.url} 
                          alt={item.fields.foto.fields.file.name}
                          width="600"
                          height="600"
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-400 ease-out" 
                        />
                        </Link>
                        <p className='text-28 lg:text-44 font-family-lora leading-[150%]'> { item.fields.nome } </p>
                        <div className='lg:mt-4'>
                          <ButtonPrimary 
                            text="Vedi i Marchi"
                            href={'/prodotti/'+item.fields.nome.replace(' ', '-').toLowerCase()}
                          />
                        </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Container>
        </main>

        <Spacing height={125} />
        <Spacing height={125} />

        <Contact />

        <Spacing height={125} />
        <Spacing height={125} />

        <Footer products={productsList} />
      </>
    )
}
