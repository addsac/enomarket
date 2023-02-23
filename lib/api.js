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
