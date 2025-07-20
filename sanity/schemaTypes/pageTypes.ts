
import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentIcon, CommentIcon, DocumentTextIcon, CalendarIcon, ComponentIcon, ImageIcon, CreditCardIcon } from '@sanity/icons'

// Generic Page Type
export const genericPageType = defineType({
  name: 'genericPage',
  title: 'Generic Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'sectionText' },
        { type: 'sectionImage' },
        { type: 'sectionGallery' },
        { type: 'sectionHero' },
        { type: 'sectionCards' },
        { type: 'sectionZones' },
        { type: 'sectionFaq' },
        { type: 'sectionPrices' }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current'
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `/${selection.slug}`
      }
    }
  }
})

// FAQ Page Type
export const faqPageType = defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'blockContent'
            })
          ]
        })
      ]
    })
  ]
})

// News Page Type
export const newsPageType = defineType({
  name: 'newsPage',
  title: 'News Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Type',
      type: 'string',
      options: {
        list: [
          { title: 'Regular', value: 'regular' },
          { title: 'Featured', value: 'featured' },
          { title: 'Top Story', value: 'top' }
        ]
      },
      initialValue: 'regular'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }),
    defineField({
      name: 'content',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'sectionText' },
        { type: 'sectionImage' },
        { type: 'sectionGallery' },
        { type: 'sectionCards' }
      ]
    })
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    },
    {
      title: 'Date, Old',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }]
    }
  ]
})

// Event Page Type
export const eventPageType = defineType({
  name: 'eventPage',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'days',
      title: 'Event Days',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          options: {
            list: [
              { title: 'Monday', value: 'monday' },
              { title: 'Tuesday', value: 'tuesday' },
              { title: 'Wednesday', value: 'wednesday' },
              { title: 'Thursday', value: 'thursday' },
              { title: 'Friday', value: 'friday' },
              { title: 'Saturday', value: 'saturday' },
              { title: 'Sunday', value: 'sunday' }
            ]
          }
        })
      ]
    }),
    defineField({
      name: 'zones',
      title: 'Zones',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'zonePage' }]
        })
      ]
    }),
    defineField({
      name: 'themes',
      title: 'Themes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'formats',
      title: 'Event Formats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          options: {
            list: [
              { title: 'Workshop', value: 'workshop' },
              { title: 'Conference', value: 'conference' },
              { title: 'Exhibition', value: 'exhibition' },
              { title: 'Performance', value: 'performance' }
            ]
          }
        })
      ]
    }),
    defineField({
      name: 'content',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'sectionText' },
        { type: 'sectionImage' },
        { type: 'sectionGallery' },
        { type: 'sectionCards' }
      ]
    })
  ]
})

// Zone Page Type
export const zonePageType = defineType({
  name: 'zonePage',
  title: 'Zone',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Zone Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'image',
      title: 'Zone Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'sectionText' },
        { type: 'sectionImage' },
        { type: 'sectionGallery' },
        { type: 'sectionCards' }
      ]
    })
  ]
})

// Zones Listing Page Type
export const zonesListingPageType = defineType({
  name: 'zonesListingPage',
  title: 'Zones Listing',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'sectionText' },
        { type: 'sectionZones' }
      ]
    }),
    defineField({
      name: 'zones',
      title: 'Featured Zones',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'zone',
              title: 'Zone',
              type: 'reference',
              to: [{ type: 'zonePage' }]
            }),
            defineField({
              name: 'link',
              title: 'Custom Link',
              type: 'url'
            }),
            defineField({
              name: 'layout',
              title: 'Layout Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Default', value: 'default' },
                  { title: 'Large', value: 'large' },
                  { title: 'Small', value: 'small' }
                ]
              },
              initialValue: 'default'
            })
          ]
        })
      ]
    })
  ]
})

// Map Page Type
export const mapPageType = defineType({
  name: 'mapPage',
  title: 'Map Page',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Map Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ]
})

// Prices Page Type
export const pricesPageType = defineType({
  name: 'pricesPage',
  title: 'Prices Page',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'sectionText' },
        { type: 'sectionPrices' }
      ]
    })
  ]
})

// Tickets Page Type
export const ticketsPageType = defineType({
  name: 'ticketsPage',
  title: 'Tickets Page',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'ticketOffers',
      title: 'Ticket Offers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Ticket Name',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number'
            }),
            defineField({
              name: 'currency',
              title: 'Currency',
              type: 'string',
              initialValue: 'EUR'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }]
            }),
            defineField({
              name: 'available',
              title: 'Available',
              type: 'boolean',
              initialValue: true
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'content',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'sectionText' },
        { type: 'sectionCards' }
      ]
    })
  ]
})

// Informations Page Type
export const informationsPageType = defineType({
  name: 'informationsPage',
  title: 'Informations Page',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'blockContent'
    }),
    defineField({
      name: 'transportBlocks',
      title: 'Transport Information',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                { type: 'sectionText' },
                { type: 'sectionImage' }
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'accessibilityBlocks',
      title: 'Accessibility Information',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                { type: 'sectionText' },
                { type: 'sectionImage' }
              ]
            })
          ]
        })
      ]
    })
  ]
})
