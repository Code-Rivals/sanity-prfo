import { type StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Pages section
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Generic Pages')
                .child(S.documentTypeList('genericPage').title('Generic Pages')),
              S.listItem()
                .title('News Articles')
                .child(
                  S.documentTypeList('newsPage')
                    .title('News Articles')
                    .filter('_type == "newsPage"')
                ),
              S.listItem()
                .title('Events')
                .child(
                  S.documentTypeList('eventPage')
                    .title('Events')
                    .filter('_type == "eventPage"')
                ),
              S.listItem()
                .title('Zones')
                .child(S.documentTypeList('zonePage').title('Zones')),
              S.listItem()
                .title('FAQ Page')
                .child(S.documentTypeList('faqPage').title('FAQ Page')),
              S.listItem()
                .title('Zones Listing')
                .child(S.documentTypeList('zonesListingPage').title('Zones Listing')),
              S.listItem()
                .title('Map Page')
                .child(S.documentTypeList('mapPage').title('Map Page')),
              S.listItem()
                .title('Prices Page')
                .child(S.documentTypeList('pricesPage').title('Prices Page')),
              S.listItem()
                .title('Tickets Page')
                .child(S.documentTypeList('ticketsPage').title('Tickets Page')),
              S.listItem()
                .title('Informations Page')
                .child(S.documentTypeList('informationsPage').title('Informations Page')),
            ])
        ),

      // Blog section (legacy)
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .child(S.documentTypeList('post').title('Posts')),
              S.listItem()
                .title('Authors')
                .child(S.documentTypeList('author').title('Authors')),
              S.listItem()
                .title('Categories')
                .child(S.documentTypeList('category').title('Categories')),
            ])
        ),

      // Add all other document types
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'genericPage',
            'faqPage', 
            'newsPage',
            'eventPage',
            'zonePage',
            'zonesListingPage',
            'mapPage',
            'pricesPage',
            'ticketsPage',
            'informationsPage',
            'post',
            'author',
            'category'
          ].includes(listItem.getId() || '')
      ),
    ])