import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'cgdghmsn',
    dataset: 'production',
    apiVersion: '2022-05-18',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)