import { client } from '@/sanity/lib/client'
import { GENERIC_PAGE_BY_LANG_AND_SLUG } from '@/sanity/lib/queries/genericPage'
import { notFound } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

interface HomeProps {
  params: {
    locale: string
  }
}

function renderBlock(block: any) {
  switch (block._type) {
    case 'sectionText':
      return (
        <section key={block._key} className="mb-6">
          <h2 className="text-xl font-semibold">{block.title}</h2>
          <div>
            <PortableText value={block.content} />
          </div>
        </section>
      )
    case 'sectionImage':
      return (
        <section key={block._key} className="mb-6">
          {block.image && block.image.asset && (
            <Image
              src={block.image.asset.url}
              alt={block.image.alt || ''}
              width={600}
              height={400}
            />
          )}
          {block.title && <h3>{block.title}</h3>}
          {block.description && <p>{block.description}</p>}
        </section>
      )
    default:
      return (
        <section key={block._key} className="mb-6">
          <pre>{JSON.stringify(block, null, 2)}</pre>
        </section>
      )
  }
}

export default async function Home({ params }: HomeProps) {
  const { locale } = params

  const page = await client.fetch(GENERIC_PAGE_BY_LANG_AND_SLUG, {
    lang: locale,
    slug: 'homepage',
  })

  if (!page) return notFound()

  // Optionally, use next-intl for static keys
  // const t = useTranslations('common')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">{page.title}</h1>
        <div className="prose max-w-none w-full">
          {Array.isArray(page.content)
            ? page.content.map(renderBlock)
            : <p>No content found.</p>
          }
        </div>
      </main>
    </div>
  )
}
