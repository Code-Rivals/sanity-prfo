export const GENERIC_PAGE_BY_LANG_AND_SLUG = `
  *[_type == "genericPage" && slug.lang == $lang && slug.value.current == $slug][0]{
    _id,
    title,
    slug,
    metaData->{metaTitle, metaDescription, meta},
    content[]
  }
`; 