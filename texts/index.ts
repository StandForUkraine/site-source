import en from './en'
import fr from './fr'
import pl from './pl'
import it from './it'
import nl from './nl'
import es from './es'
import ua from './ua'

export const defaultLang = 'en'

export const byLang = {
  en,
  fr,
  it,
  es,
  nl,
  pl,
  ua,
} as const

export type Lang = keyof typeof byLang

export const langs = Object.keys(byLang) as Lang[]

const defaultLangTexts = byLang[defaultLang]

export type Texts = typeof defaultLangTexts

export type TextKeys = keyof Texts

export default {
  ...byLang,
  default: defaultLangTexts,
}
