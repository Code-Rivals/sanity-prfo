export type Locale = 'en-US' | 'fr-FR'

export interface I18nConfig {
  readonly defaultLocale: Locale
  readonly locales: readonly Locale[]
}
