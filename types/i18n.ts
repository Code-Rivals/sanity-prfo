export type Locale = 'en-US' | 'zh-CN'

export interface I18nConfig {
  readonly defaultLocale: Locale
  readonly locales: readonly Locale[]
}
