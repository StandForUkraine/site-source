import en from './en'
import fr from './fr'
import ua from './ua'

export const defaultLang = 'en'

export const byLang = {
  en,
  fr,
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
