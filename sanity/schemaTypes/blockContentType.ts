import { defineType, defineArrayMember } from 'sanity'
import { ImageIcon } from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    // Add content block types
    defineArrayMember({
      name: 'textBlockReference',
      type: 'reference',
      title: 'Text Block',
      to: [{ type: 'textBlock' }]
    }),
    defineArrayMember({
      name: 'imageBlockReference',
      type: 'reference',
      title: 'Image Block',
      to: [{ type: 'imageBlock' }]
    }),
    defineArrayMember({
      name: 'galleryBlockReference',
      type: 'reference',
      title: 'Gallery Block',
      to: [{ type: 'galleryBlock' }]
    }),
    defineArrayMember({
      name: 'videoBlockReference',
      type: 'reference',
      title: 'Video Block',
      to: [{ type: 'video' }]
    }),
    defineArrayMember({
      name: 'ctaBlockReference',
      type: 'reference',
      title: 'Call to Action Block',
      to: [{ type: 'ctaBlock' }]
    }),
    defineArrayMember({
      name: 'featureListBlockReference',
      type: 'reference',
      title: 'Feature List Block',
      to: [{ type: 'featureListBlock' }]
    }),
    defineArrayMember({
      name: 'testimonialBlockReference',
      type: 'reference',
      title: 'Testimonial Block',
      to: [{ type: 'testimonialBlock' }]
    }),
    defineArrayMember({
      name: 'accordionBlockReference',
      type: 'reference',
      title: 'Accordion Block',
      to: [{ type: 'accordionBlock' }]
    }),
    defineArrayMember({
      name: 'contactFormBlockReference',
      type: 'reference',
      title: 'Contact Form Block',
      to: [{ type: 'contactFormBlock' }]
    }),
    defineArrayMember({
      name: 'mapBlockReference',
      type: 'reference',
      title: 'Map Block',
      to: [{ type: 'mapBlock' }]
    }),
  ],
})
