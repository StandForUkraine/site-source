import en from './en'
import ua from './ua'

export const defaultLang = 'en'

export const byLang = {
  en,
  ua,
} as const

export type Lang = keyof typeof byLang

export const langs = Object.keys(byLang)

const defaultLangTexts = byLang[defaultLang]

export type Texts = typeof defaultLangTexts

export type TextKeys = keyof Texts

export default {
  ...byLang,
  default: defaultLangTexts,
}
