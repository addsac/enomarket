import Container from '@/components/Container'
import { getProducts, getProduct } from '@/lib/api'

// Generates `/prodotti/1` and `/prodotti/2`
export async function getStaticPaths() {
    // Call an external API endpoint to get the products
    const productsData = (await getProducts()) ?? []

    if(productsData.length > 0) {
        // Get the paths we want to pre-render based on products
        const paths = productsData.map((product) => ({
            params: { product: product.fields.nome.replace(' ', '-').toLowerCase() },
        }))
        return { paths: paths, fallback: false }
    }

    return { paths: [], fallback: false }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    const { params } = context
    const { product } = params

    // Fetch the product from the API
    const productData = (await getProduct(product)) ?? []

    return {
      // Passed to the page component as props
      props: { product: productData },
    }
  }

export default function Product({ product }) {
    console.log('product', product)

    return (
      <Container>
        <h1> { product[0].fields.nome } </h1>
      </Container>
    )
}
