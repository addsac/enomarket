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
    let response = await client.getEntries({
        content_type: 'prodotti',
        order: 'fields.ordine'
    })

    return response.items
}

export const getMarks = async (product, fromProduct) => {
    // get marks from product category
    if(fromProduct){
        let response = await client.getEntries({
            content_type: 'marchi',
            order: 'sys.createdAt',
            'fields.prodotto.sys.contentType.sys.id': 'prodotti',
            'fields.categoria.sys.contentType.sys.id': 'categorie',
            'fields.prodotto.fields.nome[match]': fromProduct,
            'fields.categoria.fields.nome[match]': product,
        })

        return response.items
    }
    else{
        // get marks from product without category
        let response = await client.getEntries({
            content_type: 'marchi',
            order: 'sys.createdAt',
            'fields.prodotto.sys.contentType.sys.id': 'prodotti',
            'fields.prodotto.fields.nome[match]': product,
        })

        return response.items
    }
}