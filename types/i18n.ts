export type Locale = 'en' | 'fr'

export interface I18nConfig {
  readonly defaultLocale: Locale
  readonly locales: readonly Locale[]
}
