import { SliceZone } from '@prismicio/react'

import { notFound } from 'next/navigation'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { asHTML, PrismicNext } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import Image from 'next/image'

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
  const client = createClient()
  const page = await client.getByUID('page', 'home')

  return {
    title: page.data.title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: page.data.meta_image.url
        }
      ]
    }
  }
}

export default async function Page() {
  const client = createClient()
  const page = await client.getByUID('page', 'home').catch(() => notFound())
  const pageee = await client.getByUID('page', 'homee').catch(() => notFound())

  //console.log(JSON.stringify(pageee.data, null, 2))

  //const content = as(pageee.data.slices)
  // return <SliceZone slices={page.data.slices} components={components} />;

  return (
    <>
      {pageee.data.slices.map((image, key) => (
        <div key={key}>
          {console.log(image.primary.image.url)}
          <Image src={image.primary.image.url} width={500} height={200} />
          {/* <PrismicNextImage alt="dasdasd" height={200} wi field={image.primary.image.url} /> */}
        </div>
      ))}
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}

      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}
