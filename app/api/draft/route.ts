
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { client } from '@/sanity/lib/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Check for secret to confirm this is a valid request
  if (!secret || secret !== process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // If slug is provided, verify it exists
  if (slug) {
    try {
      const document = await client.fetch(
        `*[slug.current == $slug][0]`,
        { slug },
        {
          token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
          perspective: 'previewDrafts'
        }
      )

      if (!document) {
        return new Response('Document not found', { status: 404 })
      }
    } catch (error) {
      console.error('Error fetching document:', error)
      return new Response('Error fetching document', { status: 500 })
    }
  }

  // Enable Draft Mode
  const draft = await draftMode()
  draft.enable()

  // Redirect to the path from the fetched post
  redirect(slug || '/')
}
