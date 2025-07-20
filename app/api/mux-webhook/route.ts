
import { NextRequest, NextResponse } from 'next/server'
import Mux from '@mux/mux-node'

// Initialize Mux
const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('mux-signature')

    // Verify webhook signature if you have webhook signing secret configured
    if (process.env.MUX_WEBHOOK_SIGNATURE_SECRET && signature) {
      // Add signature verification logic here if needed
    }

    const event = JSON.parse(body)

    // Handle different Mux webhook events
    switch (event.type) {
      case 'video.asset.ready':
        console.log('Video asset is ready:', event.data.id)
        break
      case 'video.asset.errored':
        console.log('Video asset errored:', event.data.id)
        break
      default:
        console.log('Unhandled event type:', event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing Mux webhook:', error)
    return NextResponse.json(
      { error: 'Error processing webhook' },
      { status: 400 }
    )
  }
}
