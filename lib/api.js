import { createClient } from 'contentful'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  

export const getSlider = async () => {
    const response = await client.getEntries({
        content_type: 'slider',
        order: '-sys.updatedAt'
    })

    return response.items
}

export const getProducts = async () => {
    const response = await client.getEntries({
        content_type: 'prodotti',
        order: 'fields.ordine'
    })

    return response.items
}

export const getProduct = async (product) => {
    // create  a function to set the furst char of a string to uppercase
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const response = await client.getEntries({
        content_type: 'prodotti',
        'fields.nome': capitalizeFirstLetter(product),
    })

    if(response.items[0].fields.categorie) {
        // When searching on references you must specify the Content Type of the reference. Please send a Content Type id as a query parameter
        // https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/links-to-entry
        const gategories = await client.getEntries({
            content_type: 'categorie',
            links_to_entry: response.items[0].sys.id,
        })

        response.items[0].fields.categorie = gategories.items
    }

    return response.items
}
