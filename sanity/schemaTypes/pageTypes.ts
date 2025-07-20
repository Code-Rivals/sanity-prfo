import { defineType, defineField, defineArrayMember } from 'sanity'
import { AddIcon } from '@sanity/icons'

// Base page schema that all other page types extend
export const genericPageType = defineType({
    name: 'genericPage',
    title: 'Generic Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
})

export const faqPageType = defineType({
    name: 'faqPage',
    title: 'FAQ Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'faqItems',
            title: 'FAQ Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', title: 'Question', type: 'string' },
                        { name: 'answer', title: 'Answer', type: 'blockContent' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
})

export const newsPageType = defineType({
    name: 'newsPage',
    title: 'News Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime'
        }),
        defineField({
            name: 'featuredType',
            title: 'Featured Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Main Feature', value: 'main' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Standard', value: 'standard' }
                ]
            }
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
})

export const eventPageType = defineType({
    name: 'eventPage',
    title: 'Event Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'richText',
            title: 'Rich Text',
            type: 'blockContent'
        }),
        defineField({
            name: 'days',
            title: 'Days',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'zones',
            title: 'Zones',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'themes',
            title: 'Themes',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'formats',
            title: 'Formats',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        }),
        defineField({
            name: 'heroVideo',
            title: 'Hero Video',
            type: 'video'
        }),
        defineField({
            name: 'contentVideos',
            title: 'Content Videos',
            type: 'array',
            of: [{ type: 'video' }]
        }),
    ]
})

export const zonePageType = defineType({
    name: 'zonePage',
    title: 'Zone Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
})

export const zonesListingPageType = defineType({
    name: 'zonesListingPage',
    title: 'Zones Listing',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'zones',
            title: 'Zones',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'zone',
                            title: 'Zone',
                            type: 'reference',
                            to: [{ type: 'zonePage' }]
                        },
                        {
                            name: 'layoutVariant',
                            title: 'Layout Variant',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Standard', value: 'standard' },
                                    { title: 'Featured', value: 'featured' },
                                    { title: 'Compact', value: 'compact' }
                                ]
                            }
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
})

export const mapPageType = defineType({
    name: 'mapPage',
    title: 'Map Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'paragraph',
            title: 'Paragraph',
            type: 'blockContent'
        })
    ]
})

export const pricesPageType = defineType({
    name: 'pricesPage',
    title: 'Prices Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        }),
        defineField({
            name: 'introParagraph',
            title: 'Intro Paragraph',
            type: 'blockContent'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
})

export const ticketsPageType = defineType({
    name: 'ticketsPage',
    title: 'Tickets Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
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
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string' },
                        { name: 'price', title: 'Price', type: 'number' },
                        { name: 'description', title: 'Description', type: 'blockContent' },
                        { name: 'available', title: 'Available', type: 'boolean' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
})

export const informationsPageType = defineType({
    name: 'informationsPage',
    title: 'Informations Page',
    type: 'document',
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
            icon: AddIcon,
            options: {
                source: 'title',
                maxLength: 96,
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
            title: 'Transport Blocks',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        {
                            name: 'content',
                            title: 'Content',
                            type: 'array',
                            of: [{ type: 'blockContent' }]
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'accessibilityBlocks',
            title: 'Accessibility Blocks',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        {
                            name: 'content',
                            title: 'Content',
                            type: 'array',
                            of: [{ type: 'blockContent' }]
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'blockContent' }]
        })
    ]
}) 