import { defineType, defineField, defineArrayMember } from 'sanity'
import { BlockElementIcon, ImageIcon, ImagesIcon, SparkleIcon, ComponentIcon, CreditCardIcon, DocumentTextIcon } from '@sanity/icons'

// Section Text Type
export const sectionTextType = defineType({
  name: 'sectionText',
  title: 'Text Section',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }),
    defineField({
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'One Column', value: 'one-column' },
          { title: 'Two Columns', value: 'two-columns' }
        ]
      },
      initialValue: 'one-column'
    }),
    defineField({
      name: 'margin',
      title: 'Margin',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 's' },
          { title: 'Medium', value: 'm' },
          { title: 'Large', value: 'l' }
        ]
      },
      initialValue: 'm'
    })
  ],
  preview: {
    select: {
      title: 'title',
      variant: 'variant'
    },
    prepare(selection) {
      return {
        title: selection.title || 'Text Section',
        subtitle: selection.variant
      }
    }
  }
})

// Section Image Type
export const sectionImageType = defineType({
  name: 'sectionImage',
  title: 'Image Section',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'layout',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Text Left', value: 'text-left' },
          { title: 'Text Right', value: 'text-right' }
        ]
      },
      initialValue: 'default'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      layout: 'layout'
    },
    prepare(selection) {
      return {
        title: selection.title || 'Image Section',
        subtitle: selection.layout,
        media: selection.media
      }
    }
  }
})

// Section Gallery Type
export const sectionGalleryType = defineType({
  name: 'sectionGallery',
  title: 'Gallery Section',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required()
            })
          ]
        })
      ],
      validation: Rule => Rule.min(1)
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Slider', value: 'slider' }
        ]
      },
      initialValue: 'grid'
    })
  ],
  preview: {
    select: {
      images: 'images',
      layout: 'layout'
    },
    prepare(selection) {
      return {
        title: 'Gallery Section',
        subtitle: `${selection.images?.length || 0} images - ${selection.layout}`,
        media: selection.images?.[0]
      }
    }
  }
})

// Section Hero Type
export const sectionHeroType = defineType({
  name: 'sectionHero',
  title: 'Hero Section',
  type: 'object',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'introVideo',
      title: 'Intro Video',
      type: 'mux.video'
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
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
    }),
    defineField({
      name: 'link',
      title: 'Call to Action Link',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Link Text',
          type: 'string'
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare(selection) {
      return {
        title: selection.title || 'Hero Section',
        media: selection.media
      }
    }
  }
})

// Section Cards Type
export const sectionCardsType = defineType({
  name: 'sectionCards',
  title: 'Cards Section',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
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
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Key Dates', value: 'key-dates' },
          { title: 'Partners', value: 'partners' },
          { title: 'Key Numbers', value: 'key-numbers' }
        ]
      },
      initialValue: 'default'
    })
  ],
  preview: {
    select: {
      cards: 'cards',
      variant: 'variant'
    },
    prepare(selection) {
      return {
        title: 'Cards Section',
        subtitle: `${selection.cards?.length || 0} cards - ${selection.variant}`
      }
    }
  }
})

// Section Zones Type
export const sectionZonesType = defineType({
  name: 'sectionZones',
  title: 'Zones Section',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
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
      name: 'link',
      title: 'View All Link',
      type: 'url'
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Big', value: 'big' },
          { title: 'Small', value: 'small' }
        ]
      },
      initialValue: 'big'
    })
  ],
  preview: {
    select: {
      title: 'title',
      zones: 'zones',
      layout: 'layout'
    },
    prepare(selection) {
      return {
        title: selection.title || 'Zones Section',
        subtitle: `${selection.zones?.length || 0} zones - ${selection.layout}`
      }
    }
  }
})

// Section FAQ Type
export const sectionFaqType = defineType({
  name: 'sectionFaq',
  title: 'FAQ Section',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'questions',
      title: 'Questions',
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
  ],
  preview: {
    select: {
      questions: 'questions'
    },
    prepare(selection) {
      return {
        title: 'FAQ Section',
        subtitle: `${selection.questions?.length || 0} questions`
      }
    }
  }
})

// Section Prices Type
export const sectionPricesType = defineType({
  name: 'sectionPrices',
  title: 'Prices Section',
  type: 'object',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'categories',
      title: 'Price Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Category Title',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'items',
              title: 'Price Items',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Item Title',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'cards',
                      title: 'Price Cards',
                      type: 'array',
                      of: [
                        defineArrayMember({
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'title',
                              title: 'Card Title',
                              type: 'string'
                            }),
                            defineField({
                              name: 'value',
                              title: 'Price Value',
                              type: 'string'
                            }),
                            defineField({
                              name: 'subtitle',
                              title: 'Subtitle',
                              type: 'string'
                            }),
                            defineField({
                              name: 'link',
                              title: 'Purchase Link',
                              type: 'url'
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      categories: 'categories'
    },
    prepare(selection) {
      return {
        title: 'Prices Section',
        subtitle: `${selection.categories?.length || 0} categories`
      }
    }
  }
})

// Legacy blocks for backward compatibility
export const textBlockType = defineType({
  name: 'textBlock',
  title: 'Text Block (Legacy)',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    })
  ]
})

export const imageBlockType = defineType({
  name: 'imageBlock',
  title: 'Image Block (Legacy)',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})

export const galleryBlockType = defineType({
  name: 'galleryBlock',
  title: 'Gallery Block (Legacy)',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    })
  ]
})

export const videoBlockType = defineType({
  name: 'videoBlock',
  title: 'Video Block (Legacy)',
  type: 'object',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mux.video'
    })
  ]
})

export const ctaBlockType = defineType({
  name: 'ctaBlock',
  title: 'CTA Block (Legacy)',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    })
  ]
})

export const featureListBlockType = defineType({
  name: 'featureListBlock',
  title: 'Feature List Block (Legacy)',
  type: 'object',
  fields: [
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
})

export const testimonialBlockType = defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Block (Legacy)',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    })
  ]
})

export const accordionBlockType = defineType({
  name: 'accordionBlock',
  title: 'Accordion Block (Legacy)',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
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
              type: 'blockContent'
            })
          ]
        })
      ]
    })
  ]
})

export const contactFormBlockType = defineType({
  name: 'contactFormBlock',
  title: 'Contact Form Block (Legacy)',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    })
  ]
})

export const mapBlockType = defineType({
  name: 'mapBlock',
  title: 'Map Block (Legacy)',
  type: 'object',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    })
  ]
})