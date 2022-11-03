import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  "projectId": "vwug323r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
})

// cd sanity
// sanity cors add http://localhost:3000
//sanity cors add http://localhost:19006

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;