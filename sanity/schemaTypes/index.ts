import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import {
  genericPageType,
  faqPageType,
  newsPageType,
  eventPageType,
  zonePageType,
  zonesListingPageType,
  mapPageType,
  pricesPageType,
  ticketsPageType,
  informationsPageType
} from './pageTypes'
import {
  textBlockType,
  imageBlockType,
  galleryBlockType,
  videoBlockType,
  ctaBlockType,
  featureListBlockType,
  testimonialBlockType,
  accordionBlockType,
  contactFormBlockType,
  mapBlockType
} from './contentBlockTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Base types
    blockContentType,
    categoryType,
    postType,
    authorType,

    // Page types
    genericPageType,
    faqPageType,
    newsPageType,
    eventPageType,
    zonePageType,
    zonesListingPageType,
    mapPageType,
    pricesPageType,
    ticketsPageType,
    informationsPageType,

    // Content block types
    textBlockType,
    imageBlockType,
    galleryBlockType,
    videoBlockType,
    ctaBlockType,
    featureListBlockType,
    testimonialBlockType,
    accordionBlockType,
    contactFormBlockType,
    mapBlockType
  ],
}
