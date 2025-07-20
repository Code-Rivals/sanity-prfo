'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { muxInput } from 'sanity-plugin-mux-input'
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    muxInput({
      mp4_support: 'standard',
      max_resolution_tier: '1080p'
    }),
    imageHotspotArrayPlugin(),
  ],
})
