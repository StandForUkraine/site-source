import en from './en'
import fr from './fr'
import pl from './pl'
import it from './it'
import nl from './nl'
import es from './es'
import de from './de'
import tr from './tr'
import ru from './ru'
import ua from './ua'

export const defaultLang = process.env.NEXT_PUBLIC_DEFAULT_LANG as Lang

export const byLang = {
  en,
  ua,
  de,
  fr,
  it,
  es,
  nl,
  tr,
  pl,
  ru,
} as const

export const flagsMap: Record<Lang, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  es: '🇪🇸',
  fr: '🇫🇷',
  nl: '🇳🇱',
  it: '🇮🇹',
  tr: '🇹🇷',
  pl: '🇵🇱',
  ua: '🇺🇦',
  ru: '🏳',
}

export type Lang = keyof typeof byLang

export const langs = Object.keys(byLang) as Lang[]

const defaultLangTexts = byLang[defaultLang]

export type Texts = typeof defaultLangTexts

export type TextKeys = keyof Texts

export default {
  ...byLang,
  default: defaultLangTexts,
}
