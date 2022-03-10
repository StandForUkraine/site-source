import coreUa from 'core/texts/ua'
import coreEn from 'core/texts/en'
import { defaultLang } from 'core/texts'
export { flagsMap, defaultLang } from 'core/texts'

import ua from './ua'
import en from './en'

export const byLang = {
  en: {
    ...coreEn,
    ...en,
  },
  ua: {
    ...coreUa,
    ...ua,
  },
} as const

export type Lang = keyof typeof byLang

export const langs = Object.keys(byLang) as Lang[]

const defaultLangTexts = byLang[defaultLang as Lang]

export type Texts = typeof defaultLangTexts

export type TextKeys = keyof Texts

export default {
  ...byLang,
  default: defaultLangTexts,
}
