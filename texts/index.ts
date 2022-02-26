import en from './en'

export const defaultLang = 'en'

export const byLang = {
  en,
} as const

export type Lang = keyof typeof byLang

const defaultLangTexts = byLang[defaultLang]

export type Texts = typeof defaultLangTexts

export type TextKeys = keyof Texts

export default {
  ...byLang,
  default: defaultLangTexts,
}
