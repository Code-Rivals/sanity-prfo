import { defineType, defineField, defineArrayMember } from 'sanity'

// Text block with heading and body
export const textBlockType = defineType({
    name: 'textBlock',
    title: 'Text Block',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        })
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare({ title }) {
            return {
                title: title || 'Text Block',
                subtitle: 'Text'
            }
        }
    }
})

// Image block with caption
export const imageBlockType = defineType({
    name: 'imageBlock',
    title: 'Image Block',
    type: 'object',
    fields: [
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
            name: 'caption',
            title: 'Caption',
            type: 'string'
        })
    ],
    preview: {
        select: {
            media: 'image',
            title: 'caption'
        },
        prepare({ media, title }) {
            return {
                title: title || 'Image Block',
                media,
                subtitle: 'Image'
            }
        }
    }
})

// Gallery block with multiple images
export const galleryBlockType = defineType({
    name: 'galleryBlock',
    title: 'Gallery Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Gallery Title',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string'
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string'
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0'
        },
        prepare({ title, media }) {
            return {
                title: title || 'Gallery Block',
                media,
                subtitle: 'Gallery'
            }
        }
    }
})

// Video embed block
export const videoBlockType = defineType({
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        {
            name: 'asset',
            title: 'Video Asset',
            type: 'mux.video',
            description: 'Upload or select a video file'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3
        },
        {
            name: 'thumbnail',
            title: 'Custom Thumbnail',
            type: 'image',
            description: 'Optional: Override auto-generated thumbnail',
            options: {
                hotspot: true
            }
        },
        {
            name: 'autoplay',
            title: 'Autoplay',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'loop',
            title: 'Loop Video',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'muted',
            title: 'Muted by Default',
            type: 'boolean',
            initialValue: true
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'asset'
        }
    }
})

// Call to action block
export const ctaBlockType = defineType({
    name: 'ctaBlock',
    title: 'Call to Action Block',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string'
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'text'
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string'
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'url'
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Accent', value: 'accent' }
                ]
            }
        })
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'buttonText'
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'CTA Block',
                subtitle: `CTA: ${subtitle || ''}`
            }
        }
    }
})

// Feature list block
export const featureListBlockType = defineType({
    name: 'featureListBlock',
    title: 'Feature List Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Feature Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Star', value: 'star' },
                                    { title: 'Heart', value: 'heart' },
                                    { title: 'Check', value: 'check' },
                                    { title: 'Info', value: 'info' },
                                    { title: 'Warning', value: 'warning' }
                                ]
                            }
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Feature List Block',
                subtitle: 'Feature List'
            }
        }
    }
})

// Testimonial block
export const testimonialBlockType = defineType({
    name: 'testimonialBlock',
    title: 'Testimonial Block',
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
        }),
        defineField({
            name: 'role',
            title: 'Role/Company',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: { hotspot: true }
        })
    ],
    preview: {
        select: {
            title: 'author',
            subtitle: 'quote',
            media: 'image'
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'Testimonial',
                subtitle: subtitle ? `"${subtitle.substring(0, 50)}..."` : 'Testimonial',
                media
            }
        }
    }
})

// Accordion block
export const accordionBlockType = defineType({
    name: 'accordionBlock',
    title: 'Accordion Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'items',
            title: 'Accordion Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Item Title', type: 'string' },
                        { name: 'content', title: 'Content', type: 'blockContent' }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Accordion Block',
                subtitle: 'Accordion'
            }
        }
    }
})

// Contact form block
export const contactFormBlockType = defineType({
    name: 'contactFormBlock',
    title: 'Contact Form Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Form Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'formFields',
            title: 'Form Fields',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'fieldType',
                            title: 'Field Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Text', value: 'text' },
                                    { title: 'Email', value: 'email' },
                                    { title: 'Phone', value: 'phone' },
                                    { title: 'Textarea', value: 'textarea' },
                                    { title: 'Select', value: 'select' },
                                    { title: 'Checkbox', value: 'checkbox' }
                                ]
                            }
                        },
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'required', title: 'Required', type: 'boolean' },
                        {
                            name: 'options',
                            title: 'Options (for select fields)',
                            type: 'array',
                            of: [{ type: 'string' }],
                            hidden: ({ parent }) => parent?.fieldType !== 'select'
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'submitButtonText',
            title: 'Submit Button Text',
            type: 'string',
            initialValue: 'Submit'
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Contact Form',
                subtitle: 'Form'
            }
        }
    }
})

// Map block
export const mapBlockType = defineType({
    name: 'mapBlock',
    title: 'Map Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Map Block',
                subtitle: 'Map'
            }
        }
    }
}) 