import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'cgdghmsn',
    dataset: 'production',
    apiVersion: '2022-05-18',
    useCdn: true,
    token: 'sku252eFmC8y3PAbdJuvPxw4TTY3x9wgFyYlI6I0pz45DJ01PVemiw6WIFORa7QKBJ2ekhyrUWVuaXbZyv4VWTLtUrt9cximw13kqeC8ZgcfrYCTRI3PF3kpsmWCgO40YPt9FkPUzKYRiwCAHfKpHwTzfIOKyBieBg2kkn0vmdeoKTKY5DGB'
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)