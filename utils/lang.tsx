import { Lang, byLang, TextKeys, defaultLang } from 'texts'
import { useLang } from 'core/utils/lang'


export function useText() {
  const lang = useLang() as Lang
  return (key: TextKeys) => {
    const t = byLang[lang][key] || byLang[defaultLang as Lang][key]
    if (!t) console.warn('Wrong translation key:', key)
    return t || key
  }
}
